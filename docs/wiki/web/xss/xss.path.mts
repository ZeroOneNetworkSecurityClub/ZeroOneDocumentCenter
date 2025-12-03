import {DefaultTheme} from "vitepress";

function xssPath(): DefaultTheme.SidebarItem[] {
    return [
        {text: "XSS", link: "/wiki/web/xss/xss.path"},
        {text: "CSP", link: "/wiki/web/xss/xss.path"},
        {text: "CSRF", link: "/wiki/web/xss/xss.path"},
        {text: "存储型XSS", link: "/wiki/web/xss/xss.path"},
        {text: "反射型XSS", link: "/wiki/web/xss/xss.path"},
        {text: "DOMXSS", link: "/wiki/web/xss/xss.path"},
    ]
}

export default xssPath