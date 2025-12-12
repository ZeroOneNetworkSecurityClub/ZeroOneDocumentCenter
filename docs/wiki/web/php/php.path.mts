import {DefaultTheme} from "vitepress";

function phpPath(): DefaultTheme.SidebarItem[] {
    return [
        {text: "变量覆盖", link: "/web/middleware/1.变量覆盖"},
        {text: "弱比较", link: "/web/middleware/2.弱比较"},
        {text: "PHP伪协议", link: "/web/middleware/3.PHP伪协议"},
        {text: "Smarty", link: "/web/middleware/4.Smarty"},
        {text: "Twig", link: "/web/middleware/5.Twig"},
        {text: "数组绕过", link: "/web/middleware/6.数组绕过"},
        {text: "短标签", link: "/web/middleware/7.短标签"},
        {text: "反序列化", link: "/web/middleware/8.反序列化"},
        {text: "diable_function绕过", link: "/web/middleware/9.diable_function绕过"},
        {text: "无参RCE", link: "/web/middleware/10.无参RCE"},
        {text: "文件包含", link: "/web/middleware/11.文件包含"},
        {text: "正则绕过", link: "/web/middleware/12.正则绕过"},
        {text: "临时文件", link: "/web/middleware/13.临时文件"},
        {text: "Phar反序列化", link: "/web/middleware/14.Phar反序列化"},
        {text: "随机数预测", link: "/web/middleware/15.随机数预测"},
        {text: "Soap", link: "/web/middleware/16.Soap"},
        {text: "字符串逃逸", link: "/web/middleware/17.字符串逃逸"},
        {text: "PCRE", link: "/web/middleware/18.PCRE"},
        {text: "create_function", link: "/web/middleware/19.create_function"},
        {text: "FFI", link: "/web/middleware/20.FFI"},
        {text: "thinkPHP", link: "/web/middleware/21.thinkPHP"},
        {text: "Laravel", link: "/web/middleware/22.Laravel"},
        {text: "pearcmd", link: "/web/middleware/23.pearcmd"},
    ]
}

export default phpPath;