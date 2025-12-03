import {DefaultTheme} from "vitepress";

function javaPath(): DefaultTheme.SidebarItem[] {
    return [
        {text: "JSP", link: "/web/middleware/1.Nginx"},
        {text: "Spring", link: "/web/middleware/1.Nginx"},
        {text: "shiro", link: "/web/middleware/1.Nginx"},
        {text: "Log4j", link: "/web/middleware/1.Nginx"},
        {text: "FastJson", link: "/web/middleware/1.Nginx"},
        {text: "WEB-INF", link: "/web/middleware/1.Nginx"},
        {text: "Java反序列化", link: "/web/middleware/1.Nginx"},
        {text: "JNDI", link: "/web/middleware/1.Nginx"},
        {text: "Spel", link: "/web/middleware/1.Nginx"},
    ]
}

export default javaPath;