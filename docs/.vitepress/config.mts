import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 设置导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: '示例', link: '/examples/markdown-examples' },
      { text: '前端工程化', link: '/components/font' },
      { text: '后端面试', link: '/portal/design/1.设计模式基础' },
      { text: '前端面试', link: '/web/vue/1.vue面试题合集' },
    ],
    // https://vitepress.dev/zh/reference/default-theme-sidebar
    // 基于路由设置不同的侧边栏
    sidebar: {
      '/examples/': [
        {
          text: 'Examples',
          items: [
            {
              text: 'Markdown Examples',
              link: '/examples/markdown-examples',
            },
            {
              text: 'Runtime API Examples',
              link: '/examples/api-examples',
            },
          ],
        },
      ],
      '/components/': [
        {
          text: '前端工程化历程',
          items: [{ text: '字体规范', link: '/components/font' }],
        },
      ],
      '/portal/': [
        {
          text: '设计模式',
          items: [
            {
              text: '设计模式基础',
              link: '/portal/design/1.设计模式基础',
            },
          ],
        },
        {
          text: 'Java',
          items: [
            {
              text: 'java基础',
              link: '/portal/java/1.java基础',
            },
          ],
        },
        {
          text: 'Kafka',
          items: [
            {
              text: 'kafka基础介绍',
              link: '/portal/kafka/1.kafka基础介绍',
            },
          ],
        },
      ],
      '/web/': [
        {
          text: 'Vue',
          items: [
            {
              text: 'Vue面试题合集',
              link: '/web/vue/1.vue面试题合集',
            },
          ],
        },
        {
          text: 'JavaScript',
          items: [
            {
              text: 'Js面试题合集',
              link: '/web/js/1.js面试题合集',
            },
          ],
        },
      ],
    },
    // https://vitepress.dev/zh/reference/default-theme-config#sociallinks
    // 可以定义此选项以在导航栏中展示带有图标的社交帐户链接
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Lai8162/Lai8162.github.io',
      },
    ],
  },
})
