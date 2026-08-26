import {writeFileSync, cpSync, mkdirSync} from 'fs'

import sass from 'rollup-plugin-sass'
import {bundleAnalyzerPlugin} from 'rolldown/experimental'
import type {RolldownOptions, Plugin} from 'rolldown'

const isProductionBuild = process.env.NODE_ENV === 'production'

// Rolldown has built-in TS/TSX transpile, CJS interop, node resolution,
// minification and constant definition (define) — no need for
// node-resolve/commonjs/esbuild/terser/replace plugins
let plugins: Plugin[] = [
  sass({
    api: 'modern',
    options: {
      style: isProductionBuild ? 'compressed' : 'expanded',
    },
    output: styles => {
      writeFileSync('dist/index.css', `@charset "UTF-8"; ${styles}`)
    },
  }),
]

// Bundle analysis report: ANALYZE=1 yarn build -> dist/analyze-data.md
if (process.env.ANALYZE) {
  plugins.push(bundleAnalyzerPlugin({format: 'md'}))
}

// Static assets are not part of the module graph — copy them straight to dist
// (runs at config load, i.e. after the build script has cleared dist)
mkdirSync('dist', {recursive: true})
cpSync('src/Styles/Fonts', 'dist/Fonts', {recursive: true})
cpSync('src/Styles/variables.scss', 'dist/variables.scss')
cpSync('src/Components/FunnelPage/Family/Images', 'dist/Images', {
  recursive: true,
})

const config: RolldownOptions = {
  input: 'src/index.ts',
  // Do not bundle peer dependencies — the regex covers subpaths such as
  // react/jsx-runtime so consumers always pair the bundle with their own React
  external: [/^react($|\/)/, /^react-dom($|\/)/],
  plugins,
  transform: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        isProductionBuild ? 'production' : 'development'
      ),
    },
  },
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    sourcemap: true,
    minify: isProductionBuild,
  },
}

export default config
