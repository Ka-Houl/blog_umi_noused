import { defineConfig } from 'umi';

export default defineConfig({
  // exact: false, 
  // path: '/', 
  // component: '@/layouts/index',
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/list', component: '@/pages/list' },
  // ],
  history: {
    type: 'hash',
  },
  hash: true,
  // plugins: [
  //   // ref: https://umijs.org/plugin/umi-plugin-react.html
  //   [
  //     'umi-plugin-react',
  //     {
  //       antd: true,
  //       dva: true,
  //       dynamicImport: { webpackChunkName: true },
  //       title: {
  //         defaultTitle: '个人博客',
  //       },
  //       dll: true,
  //       locale: {
  //         enable: true,
  //         // default: 'en-US',

  //         default: 'zh-CN',
  //       },
  //       routes: {
  //         exclude: [
  //           /models\//,
  //           /services\//,
  //           /model\.(t|j)sx?$/,
  //           /service\.(t|j)sx?$/,
  //           /components\//,
  //         ],
  //       },
  //       // chunks: ['vendors', 'umi'],
  //       chunks: ['umi'],
  //     },
  //   ],
  // ],
  chainWebpack(config, { webpack }) {
    config.optimization.splitChunks({
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        // vendors: {
        //   name: 'vendors',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|lodash|lodash-decorators|redux-saga|re-select|dva|moment)[\\/]/,
        //   priority: -10,
        // },
        umi: {
          name: 'umi',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
          priority: -11,
        },
      },
    });
  },
});
