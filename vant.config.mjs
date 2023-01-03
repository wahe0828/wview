export default {
  name: 'wview',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/wview/',
    },
  },
  site: {
    title: 'wview',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'w-content-box',
            title: 'contentBox容器',
          },
          {
            path: 'w-drag',
            title: 'drag拖拽组件',
          },
        ],
      },
    ],
  },
};
