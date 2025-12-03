import {DefaultTheme} from "vitepress/theme";

function rcePath(): DefaultTheme.SidebarItem[] {
    return [
        { text: "RCE", link: "/web/middleware/1.RCE" },
        { text: "空格绕过", link: "/web/middleware/2.空格绕过" },
        { text: "WAF绕过", link: "/web/middleware/3.WAF绕过" },
        { text: "绕过open_basedir", link: "/web/middleware/4.绕过open_basedir" },
        { text: "无字母RCE", link: "/web/middleware/5.无字母RCE" },
        { text: "无数字RCE", link: "/web/middleware/6.无数字RCE" },
        { text: "无回显RCE", link: "/web/middleware/7.无回显RCE" },
    ];
}

export default rcePath;