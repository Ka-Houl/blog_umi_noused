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
    type: 'browser',    //router类型
  },
  hash: true,
  dva: {
    immer: true,
    hmr: false,
    skipModelValidate: true
  },
  plugins: [
  //   // ref: https://umijs.org/plugin/umi-plugin-react.html
  // 'umi-plugin-react',
      // '@umijs/plugin-dva',
      // '@umijs/preset-react'
  ],
  title:'个人博客',
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
