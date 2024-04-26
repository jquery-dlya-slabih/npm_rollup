import terser from '@rollup/plugin-terser';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import postcssUrl from 'postcss-url';
import autoExternal from 'rollup-plugin-auto-external';
import image from '@rollup/plugin-image';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].es.js',
      preserveModules: true
    },
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].js',
      preserveModules: true,
      exports: 'auto'
    }
  ],
  external: ['react/jsx-runtime'],
  plugins: [
    typescript({
      include: ['src/**', '@types/**'],
      exclude: ['**/*.test.ts(x)?']
    }),
    image(),
    postcss({
      minimize: true,
      modules: true,
      extract: 'index.css',
      plugins: [postcssUrl({ url: 'inline' })]
    }),
    terser(),
    autoExternal(),
    filesize({
      showMinifiedSize: false,
      showGzippedSize: false
    })
  ]
};
