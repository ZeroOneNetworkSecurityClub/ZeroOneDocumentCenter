import {DefaultTheme} from "vitepress";

function sqliPath(): DefaultTheme.SidebarItem[] {
    return [
        {text: "整数型注入", link: "/web/sqli/1.整数型注入"},
        {text: "字符型注入", link: "/web/sqli/2.字符型注入"},
        {text: "报错注入", link: "/web/sqli/3.报错注入"},
        {text: "布尔注入", link: "/web/sqli/4.布尔盲注"},
        {text: "时间盲注", link: "/web/sqli/5.时间盲注"},
        {text: "二次注入", link: "/web/sqli/6.二次注入"},
        {text: "无列名注入", link: "/web/sqli/7.无列名注入"},
        {text: "堆叠注入", link: "/web/sqli/8.堆叠注入"},
        {text: "Insert注入", link: "/web/sqli/9.堆叠注入"},
        {text: "Update注入", link: "/web/sqli/10.Update注入"},
        {text: "Cookie注入", link: "/web/sqli/11.Cookie注入"},
        {text: "宽字节注入", link: "/web/sqli/12.宽字节注入"},
        {text: "Quine注入", link: "/web/sqli/13.Quine注入"},
        {text: "Unique注入", link: "/web/sqli/14.Unique注入"},
        {text: "NoSQL盲注", link: "/web/sqli/15.NoSQL盲注"},
        {text: "UDF提权", link: "/web/sqli/16.UDF提权"},
    ];
}

export default sqliPath;