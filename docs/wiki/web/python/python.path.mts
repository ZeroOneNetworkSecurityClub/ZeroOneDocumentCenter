import {DefaultTheme} from "vitepress";

function pythonPath(): DefaultTheme.SidebarItem[] {
    return [
        {text: "Flask", link: "/web/middleware/1.Flask"},
        {text: "SSTI", link: "/web/middleware/2.SSTI"},
        {text: "Jinja2", link: "/web/middleware/3.Jinja2"},
        {text: "Cookie伪造", link: "/web/middleware/4.Cookie伪造"},
        {text: "反序列化", link: "/web/middleware/5.反序列化"},
        {text: "Tornado", link: "/web/middleware/6.Tornado"},
        {text: "Django", link: "/web/middleware/7.Django"},
        {text: "DebugRCE", link: "/web/middleware/8.DebugRCE"},
        {text: "沙盒逃逸", link: "/web/middleware/9.沙盒逃逸"},
    ]
}

export default pythonPath;