import {DefaultTheme} from "vitepress";

function nodejsPath(): DefaultTheme.SidebarItem[] {
    return [
        {text: "原型链污染", link: "/web/middleware/1.Nginx"},
        {text: "字符绕过", link: "/web/middleware/1.Nginx"},
        {text: "沙盒逃逸", link: "/web/middleware/1.Nginx"},
        {text: "Ejs", link: "/web/middleware/1.Nginx"},
        {text: "SSTI", link: "/web/middleware/1.Nginx"},
        {text: "IIFE", link: "/web/middleware/1.Nginx"},
    ]
}

export default nodejsPath