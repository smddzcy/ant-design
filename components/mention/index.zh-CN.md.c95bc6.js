(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1527:function(t,n){t.exports={content:["section",["p","提及组件。已废弃，请使用 ",["a",{title:null,href:"/components/mentions"},"Mentions"]," 代替。"],["h2","为何废弃？"],["div",{class:"ant-alert ant-alert-error ant-alert-no-icon"},"\nMention 组件使用了\n",["a",{href:"https://www.npmjs.com/package/draft-js",target:"_blank",rel:"noopener noreferrer"},"Draft.js"],"\n进行提示定位，占用了约 11.6% 的包大小。因而我们决定使用更轻量级的解决方案以便于在未来降低整个包的大小。\n"]],meta:{category:"Components",type:"废弃",subtitle:"提及（废弃）",title:"Mention",filename:"components/mention/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#为何废弃？",title:"为何废弃？"},"为何废弃？"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mention</span>\n  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>\n  <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'afc163\'</span><span class="token punctuation">,</span> <span class="token string">\'benjycui\'</span><span class="token punctuation">,</span> <span class="token string">\'yiminghe\'</span><span class="token punctuation">,</span> <span class="token string">\'jljsj33\'</span><span class="token punctuation">,</span> <span class="token string">\'dqaria\'</span><span class="token punctuation">,</span> <span class="token string">\'RaoHai\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>'},["code","<Mention\n  onChange={onChange}\n  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}\n/>"]],["h3","Mention API"],["table",["thead",["tr",["th","API"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","getMentions"],["td","获取当前 contentState 中提到的人的列表"],["td","Function(contentState: ContentState): string","[","]"]],["tr",["td","toContentState"],["td","把字符串转成 ContentState"],["td","Function(value: string): ContentState"]],["tr",["td","toString"],["td","把 ContentState 转成字符串"],["td","Function(contentState: ContentState): string"]]]],["h3","Mention"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","autoFocus"],["td","自动获取焦点"],["td","boolean"],["td","false"]],["tr",["td","defaultValue"],["td","默认值"],["td","ContentState, 可以用 ",["code","Mention.toContentState(text)"]," 把文字转换成 ContentState"],["td","null"]],["tr",["td","defaultSuggestions"],["td","默认建议内容"],["td","Array","<","string","|","Mention.Nav>"],["td","[","]"]],["tr",["td","disabled"],["td","是否禁用状态."],["td","boolean"],["td","false"]],["tr",["td","getSuggestionContainer"],["td","菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位"],["td","function()"],["td","() => document.body"]],["tr",["td","loading"],["td","加载中"],["td","boolean"],["td","false"]],["tr",["td","multiLines"],["td","多行模式"],["td","boolean"],["td","false"]],["tr",["td","notFoundContent"],["td","未找到时的内容"],["td","string"],["td","'无匹配结果，轻敲空格完成输入'"]],["tr",["td","placeholder"],["td","输入框默认文字"],["td","string"],["td","null"]],["tr",["td","placement"],["td","建议框位置，可选 ",["code","top"]," ",["code","bottom"]],["td","string"],["td","'bottom'"]],["tr",["td","prefix"],["td","触发弹出下拉框的字符"],["td","string or Array","<","string>"],["td","'@'"]],["tr",["td","readOnly"],["td","是否只读."],["td","boolean"],["td","false"]],["tr",["td","suggestions"],["td","建议内容"],["td","Array","<","string","|","Mention.Nav>"],["td","[","]"]],["tr",["td","suggestionStyle"],["td","弹出下拉框样式"],["td","object"],["td","{}"]],["tr",["td","value"],["td","值"],["td","ContentState"],["td","null"]],["tr",["td","onBlur"],["td","失去焦点时回调"],["td","function(e)"],["td","null"]],["tr",["td","onChange"],["td","输入框内容变化时回调"],["td","function(contentState: ContentState)"],["td","null"]],["tr",["td","onFocus"],["td","获得焦点时回调"],["td","function(e)"],["td","null"]],["tr",["td","onSearchChange"],["td","输入框中 @ 变化时回调"],["td","function(value:string, trigger: string)"],["td","[","]"]],["tr",["td","onSelect"],["td","下拉框选择建议时回调"],["td","function(suggestion: string, data?: any)"],["td","null"]]]],["h3","Mention 方法"],["table",["thead",["tr",["th","名称"],["th","描述"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"]],["tr",["td","focus()"],["td","获取焦点"]]]],["h3","Nav"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","children"],["td","建议内容"],["td","object"],["td","{}"]],["tr",["td","value"],["td","建议值，选择建议时，用此值插入到输入框中"],["td","string"],["td",'""']]]]]}}}]);