import { defineConfig } from "vitepress";
// import { createRequire } from 'module'
import { defineAdditionalConfig, type DefaultTheme } from "vitepress";

export default defineConfig({
  title: "零壹文档中心",
  description: "零壹网络安全社团文件发布和技术文档公开站点",
  // base: '/',
  themeConfig: {
    nav: nav(),

    sidebar: {
      "/docs/": { base: "/docs/", items: sidebarDocs() },
      "/wiki/": { base: "/wiki/", items: sidebarWiki() },
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ZeroOneNetworkSecurityClub/ZeroOneDocumentCenter",
      },
    ],

    editLink: {
      pattern:
        "https://github.com/ZeroOneNetworkSecurityClub/ZeroOneDocumentCenter/tree/main/docs/:path",
      text: "在GitHub上编辑此页面",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "首页", link: "/", activeMatch: "/" },
    { text: "贡献者", link: "/members", activeMatch: "/members" },
    {
      text: "文档",
      items: [
        { text: "文件公开", link: "/docs/", activeMatch: "/docs/" },
        { text: "技术文档", link: "/wiki/", activeMatch: "/wiki/" },
      ],
    },
  ];
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "零壹网络安全社团制度文件",
      items: [
        { text: "零壹网络安全社团章程", link: "/零壹网络安全社团章程" },
        { text: "零壹网络安全社团业务范围", link: "/零壹网络安全社团业务范围" },
        { text: "零壹网络安全社团会员制度", link: "/零壹网络安全社团会员制度" },
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
        {
          text: "SQL注入",
          collapsed: true,
          items: [
            { text: "整数型注入", link: "/web/sqli/1.整数型注入" },
            { text: "字符型注入", link: "/web/sqli/2.字符型注入" },
            { text: "报错注入", link: "/web/sqli/3.报错注入" },
            { text: "布尔注入", link: "/web/sqli/4.布尔盲注" },
            { text: "时间盲注", link: "/web/sqli/5.时间盲注" },
            { text: "二次注入", link: "/web/sqli/6.二次注入" },
            { text: "无列名注入", link: "/web/sqli/7.无列名注入" },
            { text: "堆叠注入", link: "/web/sqli/8.堆叠注入" },
          ],
        },
      ],
    },
  ];
}
