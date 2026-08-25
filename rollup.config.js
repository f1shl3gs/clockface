import {writeFileSync} from 'fs'

import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terserModule from '@rollup/plugin-terser'
import gzipModule from 'rollup-plugin-gzip'
import esbuildModule from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'
import sass from 'rollup-plugin-sass'
import copy from 'rollup-plugin-copy'

const pkg = require('./package.json')
const isProductionBuild = process.env.NODE_ENV === 'production'
const gzip = gzipModule.default || gzipModule
const terser = terserModule.default || terserModule
const esbuild = esbuildModule.default || esbuildModule

let plugins = [
  nodeResolve(),
  commonjs(),
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify(
      isProductionBuild ? 'production' : 'development'
    ),
  }),
  // Transpile only — type checking and declaration emit live in `tsc` (TS7
  // native), run separately via `yarn typecheck` / the build script
  esbuild({
    target: 'es2020',
    include: /\.(ts|tsx)$/,
  }),
  sass({
    api: 'modern',
    options: {
      silenceDeprecations: ['import', 'global-builtin'],
      style: isProductionBuild ? 'compressed' : 'expanded',
    },
    output: styles => {
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

// Do not bundle peer dependencies — the regex covers subpaths such as
// react/jsx-runtime so consumers always pair the bundle with their own React
const external = [/^react($|\/)/, /^react-dom($|\/)/]

export default [
  {
    input,
    plugins,
    external,
    output: {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
    onwarn(warning, warn) {
      if (
        warning.code === 'CIRCULAR_DEPENDENCY' &&
        warning.ids?.every(id => id.includes('/chroma-js/'))
      ) {
        return
      }

      warn(warning)
    },
  },
]
