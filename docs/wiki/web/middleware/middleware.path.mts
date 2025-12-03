import {DefaultTheme} from "vitepress";

function middlewarePath(): DefaultTheme.SidebarItem[] {
    return [
        {text: "JWT", link: "/web/middleware/1.JWT"},
        {text: "SSRF", link: "/web/middleware/2.SSRF"},
        {text: "Redis", link: "/web/middleware/3.Redis"},
        {text: "主从复制", link: "/web/middleware/4.主从复制"},
        {text: "XXE", link: "/web/middleware/5.XXE"},
        {text: "XPATH注入", link: "/web/middleware/6.XPATH注入"},
        {text: "GraphQL注入", link: "/web/middleware/7.GraphQL注入"},
        {text: "SQLite注入", link: "/web/middleware/8.SQLite注入"},
        {text: "URL污染", link: "/web/middleware/9.URL污染"},
        {text: "DNS绑定", link: "/web/middleware/10.DNS绑定"},
        {text: "DNS重绑定", link: "/web/middleware/11.DNS重绑定"},
        {text: "HTTP走私", link: "/web/middleware/12.HTTP走私"},
        {text: "Apache", link: "/web/middleware/13.Apache"},
        {text: "Nginx", link: "/web/middleware/14.Nginx"},
        {text: "CRLF", link: "/web/middleware/15.CRLF"},
    ]
}

export default middlewarePath;