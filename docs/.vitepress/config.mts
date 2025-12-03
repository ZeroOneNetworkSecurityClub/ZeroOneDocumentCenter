import {type DefaultTheme, defineConfig} from "vitepress";
// 下级路由导入
import sqliPath from "../wiki/web/sqli/sqli.path.mjs";
import xssPath from "../wiki/web/xss/xss.path.mjs";
import rcePath from "../wiki/web/rce/rce.path.mjs";
import fileuploadPath from "../wiki/web/fileupload/fileupload.path.mjs";
import phpPath from "../wiki/web/php/php.path.mjs";
import pythonPath from "../wiki/web/python/python.path.mjs";
import middlewarePath from "../wiki/web/middleware/middleware.path.mjs";
import javaPath from "../wiki/web/java/java.path.mjs";
import linuxPath from "../wiki/web/linux/linux.path.mjs";
import nodejsPath from "../wiki/web/nodejs/nodejs.path.mjs";
import otherPath from "../wiki/web/other/other.path.mjs";


export default defineConfig({
    title: "零壹文档中心",
    description: "零壹网络安全社团文件发布和技术文档公开站点",
    themeConfig: {
        nav: nav(),

        sidebar: {
            "/docs/": {base: "/docs/", items: sidebarDocs()},
            "/wiki/": {base: "/wiki/", items: sidebarWiki()},
        },

        // 社交链接
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/ZeroOneNetworkSecurityClub/ZeroOneDocumentCenter",
            },
        ],

        // 编辑链接
        editLink: {
            pattern:
                "https://github.com/ZeroOneNetworkSecurityClub/ZeroOneDocumentCenter/tree/main/docs/:path",
            text: "在 GitHub 上编辑此页面",
        },

        // 页脚
        footer: {
            message: "基于 <a href=\"https://vitepress.dev/\" target=\"_blank\">VitePress</a> 构建.",
            copyright: "Build with ❤️ © 2025 <a href='https://www.websec.org.cn/' target='_blank'>零壹网络安全社团</a>",
        },

        // 搜索配置
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                            closeText: "关闭",
                        },
                    }
                }
            }
        },

        // 大纲配置
        outline: {
            depth: [2, 3],
            label: '页面导航'
        },

        // 返回顶部
        returnToTopLabel: "回到顶部",

        // 深色模式切换
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",

        // 侧边栏
        sidebarMenuLabel: "菜单",

        // 外部链接图标
        externalLinkIcon: true,

        // 最后更新时间
        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "medium",
            },
        },

        // 文档页脚
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },

    },
});

function nav(): DefaultTheme.NavItem[] {
    return [
        {text: "首页", link: "/", activeMatch: "/"},
        {text: "贡献者", link: "/members", activeMatch: "/members"},
        {
            text: "文档",
            items: [
                {text: "文件公开", link: "/docs/", activeMatch: "/docs/"},
                {text: "技术文档", link: "/wiki/", activeMatch: "/wiki/"},
            ],
        },
    ];
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "零壹网络安全社团制度文件",
            items: [
                {text: "零壹网络安全社团章程", link: "/零壹网络安全社团章程"},
                {text: "零壹网络安全社团业务范围", link: "/零壹网络安全社团业务范围"},
                {text: "零壹网络安全社团会员制度", link: "/零壹网络安全社团会员制度"},
                {
                    text: "零壹网络安全社团组织机构与产生办法",
                    link: "/零壹网络安全社团组织机构与产生办法",
                },
                {
                    text: "零壹网络安全社团财务管理制度",
                    link: "/零壹网络安全社团财务管理制度",
                },
                {
                    text: "零壹网络安全社团章程修改程序",
                    link: "/零壹网络安全社团章程修改程序",
                },
                {
                    text: "零壹网络安全社团终止程序及终止后的财产处理",
                    link: "/零壹网络安全社团终止程序及终止后的财产处理",
                },
            ],
        },
    ];
}


function sidebarWiki(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Web安全",
            collapsed: true,
            items: [
                {text: "SQL注入", collapsed: true, items: sqliPath()},
                {text: "文件上传", collapsed: true, items: fileuploadPath()},
                {text: "RCE", collapsed: true, items: rcePath()},
                {text: "PHP", collapsed: true, items: phpPath()},
                {text: "Python", collapsed: true, items: pythonPath()},
                {text: "NodeJS", collapsed: true, items: nodejsPath()},
                {text: "Java", collapsed: true, items: javaPath()},
                {text: "XSS", collapsed: true, items: xssPath()},
                {text: "中间件攻击", collapsed: true, items: middlewarePath()},
                {text: "Linux相关", collapsed: true, items: linuxPath()},
                {text: "其他", collapsed: true, items: otherPath()}
            ],
        },
        {
            text: "PWN二进制",
            collapsed: true,
            items: [
                {text: "暂无内容", link: ""},
            ],
        },
        {
            text: "REVERSE逆向",
            collapsed: true,
            items: [
                {text: "暂无内容", link: ""},
            ],
        },
        {
            text: "MISC杂项",
            collapsed: true,
            items: [
                {text: "暂无内容", link: ""},
            ],
        },
        {
            text: "CRYPTO密码",
            collapsed: true,
            items: [
                {text: "暂无内容", link: ""},
            ],
        },
        {
            text: "ETH区块链",
            collapsed: true,
            items: [
                {text: "暂无内容", link: ""},
            ],
        },
        {
            text: "ai人工智能",
            collapsed: true,
            items: [
                {text: "暂无内容", link: ""},
            ],
        },
    ];
}
