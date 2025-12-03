import {DefaultTheme} from "vitepress";

function fileuploadPath(): DefaultTheme.SidebarItem[] {
    return [
        {text: "双写后缀", link: "/web/middleware/1.双写后缀"},
        {text: "%00截断", link: "/web/middleware/2.%00截断"},
        {text: ".htaccess", link: "/web/middleware/3.htaccess"},
        {text: "MIME绕过", link: "/web/middleware/4.MIME绕过"},
        {text: "文件头绕过", link: "/web/middleware/5.文件头绕过"},
        {text: "二次渲染", link: "/web/middleware/6.二次渲染"},
        {text: "条件竞争", link: "/web/middleware/7.条件竞争"},
    ]
}

export default fileuploadPath;