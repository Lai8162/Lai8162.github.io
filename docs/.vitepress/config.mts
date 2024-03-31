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
            { text: 'Examples', link: '/examples/markdown-examples' },
            { text: 'Components', link: '/components/font' },
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
                    text: 'Components',
                    items: [{ text: 'Font', link: '/components/font' }],
                },
            ],
        },
        // https://vitepress.dev/zh/reference/default-theme-config#sociallinks
        // 可以定义此选项以在导航栏中展示带有图标的社交帐户链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        ],
    },
})
