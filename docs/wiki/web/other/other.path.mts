import {DefaultTheme} from "vitepress";

function otherPath(): DefaultTheme.SidebarItem[] {
    return [
        {text: "HTTP协议", link: "/web/middleware/1.Nginx"},
        {text: "JS分析", link: "/web/middleware/1.Nginx"},
        {text: "弱口令", link: "/web/middleware/1.Nginx"},
        {text: "目录扫描", link: "/web/middleware/1.Nginx"},
        {text: "信息收集", link: "/web/middleware/1.Nginx"},
        {text: "目录穿越", link: "/web/middleware/1.Nginx"},
        {text: "源码泄露", link: "/web/middleware/1.Nginx"},
        {text: ".git泄露", link: "/web/middleware/1.Nginx"},
        {text: ".svn泄露", link: "/web/middleware/1.Nginx"},
        {text: "CSV泄露", link: "/web/middleware/1.Nginx"},
        {text: ".ng泄露", link: "/web/middleware/1.Nginx"},
        {text: "前端绕过", link: "/web/middleware/1.Nginx"},
        {text: "vim泄露", link: "/web/middleware/1.Nginx"},
        {text: "代码审计", link: "/web/middleware/1.Nginx"},
        {text: "DNSLOG", link: "/web/middleware/1.Nginx"},
        {text: "HTTPLOG", link: "/web/middleware/1.Nginx"},
        {text: "未授权访问", link: "/web/middleware/1.Nginx"},
        {text: "GOB", link: "/web/middleware/1.Nginx"},
    ]
}

export default otherPath