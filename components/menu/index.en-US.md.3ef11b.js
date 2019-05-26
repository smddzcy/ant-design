(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1532:function(t,e){t.exports={content:["section",["p","Menu list of Navigation."],["h2","When To Use"],["p","Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website."],["p","More layouts with navigation: ",["a",{title:null,href:"/components/layout"},"layout"],"."]],meta:{category:"Components",cols:1,type:"Navigation",title:"Menu",filename:"components/menu/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>Menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SubMenu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>SubMenuItem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menu</span><span class="token punctuation">></span></span>'},["code",'<menu>\n  <Menu.Item>Menu</Menu.Item>\n  <SubMenu title="SubMenu">\n    <Menu.Item>SubMenuItem</Menu.Item>\n  </SubMenu>\n</menu>']],["h3","Menu"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"]]],["tbody",["tr",["td","defaultOpenKeys"],["td","array with the keys of default opened sub menus"],["td","string","[","]"],["td"]],["tr",["td","defaultSelectedKeys"],["td","array with the keys of default selected menu items"],["td","string","[","]"],["td"]],["tr",["td","forceSubMenuRender"],["td","render submenu into DOM before it shows"],["td","boolean"],["td","false"]],["tr",["td","inlineCollapsed"],["td","specifies the collapsed status when menu is inline mode"],["td","boolean"],["td","-"]],["tr",["td","inlineIndent"],["td","indent px of inline menu item on each level"],["td","number"],["td","24"]],["tr",["td","mode"],["td","type of the menu; ",["code","vertical"],", ",["code","horizontal"],", and ",["code","inline"]," modes are supported"],["td","string: ",["code","vertical"]," ","|"," ",["code","horizontal"]," ","|"," ",["code","inline"]],["td",["code","vertical"]]],["tr",["td","multiple"],["td","Allow selection of multiple items"],["td","boolean"],["td","false"]],["tr",["td","openKeys"],["td","array with the keys of currently opened sub menus"],["td","string","[","]"],["td"]],["tr",["td","selectable"],["td","allow selecting menu items"],["td","boolean"],["td","true"]],["tr",["td","selectedKeys"],["td","array with the keys of currently selected menu items"],["td","string","[","]"],["td"]],["tr",["td","style"],["td","style of the root node"],["td","object"],["td"]],["tr",["td","subMenuCloseDelay"],["td","delay time to hide submenu when mouse leave, unit: second"],["td","number"],["td","0.1"]],["tr",["td","subMenuOpenDelay"],["td","delay time to show submenu when mouse enter, unit: second"],["td","number"],["td","0"]],["tr",["td","theme"],["td","color theme of the menu"],["td","string: ",["code","light"]," ",["code","dark"]],["td",["code","light"]]],["tr",["td","onClick"],["td","callback executed when a menu item is clicked"],["td","function({ item, key, keyPath, domEvent })"],["td","-"]],["tr",["td","onDeselect"],["td","callback executed when a menu item is deselected, only supported for multiple mode"],["td","function({ item, key, keyPath, selectedKeys, domEvent })"],["td","-"]],["tr",["td","onOpenChange"],["td","called when open/close sub menu"],["td","function(openKeys: string","[","])"],["td","noop"]],["tr",["td","onSelect"],["td","callback executed when a menu item is selected"],["td","function({ item, key, keyPath, selectedKeys, domEvent })"],["td","none"]],["tr",["td","overflowedIndicator"],["td","Customized icon when menu collapsed"],["td","ReactNode"],["td","-"]]]],["blockquote",["p","More options in ",["a",{title:null,href:"https://github.com/react-component/menu#api"},"rc-menu"]]],["h3","Menu.Item"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"]]],["tbody",["tr",["td","disabled"],["td","whether menu item is disabled or not"],["td","boolean"],["td","false"]],["tr",["td","key"],["td","unique id of the menu item"],["td","string"],["td"]],["tr",["td","title"],["td","set display title for collapsed item"],["td","string"],["td"]]]],["h3","Menu.SubMenu"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"]]],["tbody",["tr",["td","children"],["td","sub menus or sub menu items"],["td","Array","<","MenuItem","|","SubMenu>"],["td"]],["tr",["td","disabled"],["td","whether sub menu is disabled or not"],["td","boolean"],["td","false"]],["tr",["td","key"],["td","unique id of the sub menu"],["td","string"],["td"]],["tr",["td","title"],["td","title of the sub menu"],["td","string","|","ReactNode"],["td"]],["tr",["td","onTitleClick"],["td","callback executed when the sub menu title is clicked"],["td","function({ key, domEvent })"],["td"]]]],["h3","Menu.ItemGroup"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"]]],["tbody",["tr",["td","children"],["td","sub menu items"],["td","MenuItem","[","]"],["td"]],["tr",["td","title"],["td","title of the group"],["td","string","|","ReactNode"],["td"]]]],["h3","Menu.Divider"],["p","Divider line in between menu items, only used in vertical popup Menu or Dropdown Menu."]]}}}]);