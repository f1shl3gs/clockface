import {writeFileSync} from 'fs'

import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import {terser} from 'rollup-plugin-terser'
import gzipModule from 'rollup-plugin-gzip'
import typescript from '@rollup/plugin-typescript'
import sass from 'rollup-plugin-sass'
import copy from 'rollup-plugin-copy'

const pkg = require('./package.json')
const isProductionBuild = process.env.NODE_ENV === 'production'
const gzip = gzipModule.default || gzipModule

let plugins = [
  nodeResolve(),
  commonjs(),
  typescript({
    include: ['**/*.ts', '**/*.tsx', '**/*.d.ts'],
  }),
  sass({
    api: 'modern',
    options: {
      silenceDeprecations: ['import', 'global-builtin'],
      style: isProductionBuild ? 'compressed' : 'expanded',
    },
    output: (styles) => {
      writeFileSync('dist/index.css', `@charset "UTF-8"; ${styles}`)
    },
  }),
  copy({
    targets: [
      {src: 'src/Styles/Fonts', dest: 'dist'},
      {src: 'src/Styles/variables.scss', dest: 'dist'},
      {src: 'src/**/Images/*', dest: 'dist/Images'},
    ],
  }),
]

// Minify and compress output when in production
if (isProductionBuild) {
  plugins = [...plugins, terser(), gzip()]
}

const input = 'src/index.ts'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  uuid: 'uuid',
  lodash: '_',
  'prop-types': 'PropTypes',
}

// Do not bundle peer dependencies
const external = ['react', 'react-dom', 'lodash', 'uuid', 'prop-types']

export default [
  {
    input,
    plugins,
    external,
    output: {
      name: pkg.name,
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      globals,
    },
    onwarn(warning, warn) {
      if (
        warning.code === 'CIRCULAR_DEPENDENCY' &&
        warning.ids?.every((id) => id.includes('/chroma-js/'))
      ) {
        return
      }

      warn(warning)
    },
  },
]
