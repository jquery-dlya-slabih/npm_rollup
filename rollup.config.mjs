import terser from '@rollup/plugin-terser';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import postcssUrl from 'postcss-url';
import image from '@rollup/plugin-image';
import typescript from '@rollup/plugin-typescript';
import nodeExternals from 'rollup-plugin-node-externals';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].es.js',
      preserveModules: true
    },
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].js',
      preserveModules: true
    }
  ],
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
    nodeExternals(),
    terser(),
    filesize({
      showMinifiedSize: false,
      showGzippedSize: false
    })
  ]
};
