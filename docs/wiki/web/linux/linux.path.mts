import {DefaultTheme} from "vitepress";

function linuxPath(): DefaultTheme.SidebarItem[] {
    return [
        {text: "SE权限", link: "/web/middleware/1.Nginx"},
        {text: "SUID提权", link: "/web/middleware/1.Nginx"},
        {text: "权限提升", link: "/web/middleware/1.Nginx"},
        {text: "/proc", link: "/web/middleware/1.Nginx"},
        {text: "定时任务", link: "/web/middleware/1.Nginx"},
        {text: "Linux命令", link: "/web/middleware/1.Nginx"},
    ]
}

export default linuxPath;