import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: './src/index.ts',
  format: 'esm',
  platform: 'neutral',
  unbundle: true,
  dts: true,
  exports: {
    customExports: {
      './dist/variables.scss': './dist/variables.scss',
      './dist/Styles/shared.css': './dist/Styles/shared.css',
      './src/Types': './src/Types/index.js'
    }
  },
  clean: true,
  minify: true,
  deps: {
    neverBundle: ['react', 'react-dom'],
  },
  css: {
    splitting: true,
    inject: true,
    preprocessorOptions: {
      scss: {

      }
    }
  },
  copy: [
    {
      from: 'src/Styles/variables.scss',
      to: 'dist',
    },
    {
      from: 'src/Styles/shared.scss',
      to: 'dist/Styles',
    },
    {
      from: 'src/Styles/Fonts/*',
      to: 'dist/Styles/Fonts',
    },
  ]
})