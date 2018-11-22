webpackJsonp([1],{"0IpB":function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var h=t("Dd8w"),g=t.n(h),u=t("0aAL"),s=t("qwAB"),o=t("3Q4o"),e={props:{data:{type:Array}},data:function(){return{scrollY:-1,currentIndex:0}},created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},methods:{selectItem:function(n){this.$emit("select",n)},refresh:function(){this.$refs.listview.refresh()},scroll:function(n){this.scrollY=n.y},onShortcutStart:function(n){var i=Object(o.b)(n.target,"index"),t=n.touches[0];this.touch.y1=t.pageY,this.touch.anchorIndex=i,this._scrollTo(i)},onShortcutMove:function(n){var i=n.touches[0];this.touch.y2=i.pageY;var t=(this.touch.y2-this.touch.y1)/20|0,h=parseInt(this.touch.anchorIndex)+t;this._scrollTo(h)},_scrollTo:function(n){(n||0===n)&&(n<0?n=0:n>this.listHeight.length-2&&(n=this.listHeight.length-2),this.scrollY=-this.listHeight[n],this.$refs.listview.scrollToElement(this.$refs.listGroup[n],0))},_calculateHeight:function(){this.listHeight=[];var n=this.$refs.listGroup,i=0;this.listHeight.push(i);for(var t=0;t<n.length;t++){i+=n[t].clientHeight,this.listHeight.push(i)}}},watch:{data:function(){var n=this;setTimeout(function(){n._calculateHeight()},20)},scrollY:function(n){var i=this.listHeight;if(n>0)this.currentIndex=0;else{for(var t=0;t<i.length-1;t++){var h=i[t],g=i[t+1];if(-n>=h&&-n<g)return void(this.currentIndex=t)}this.currentIndex=i.length-2}}},computed:{shortcutList:function(){return this.data.map(function(n){return n.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},components:{Scroll:s.a}},r={render:function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("scroll",{ref:"listview",staticClass:"listview",attrs:{listenScroll:n.listenScroll,probeType:n.probeType},on:{scroll:n.scroll}},[t("ul",n._l(n.data,function(i){return t("li",{key:i.id,ref:"listGroup",refInFor:!0,staticClass:"list-group"},[t("h2",{staticClass:"list-group-title"},[n._v(n._s(i.title))]),n._v(" "),t("ul",n._l(i.items,function(i){return t("li",{key:i.id,staticClass:"list-group-item",on:{click:function(t){n.selectItem(i)}}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.avatar,expression:"item.avatar"}],staticClass:"avatar"}),n._v(" "),t("span",{staticClass:"name"},[n._v(n._s(i.name))])])}))])})),n._v(" "),t("div",{staticClass:"list-shortcut",on:{touchstart:n.onShortcutStart,touchmove:function(i){return i.stopPropagation(),i.preventDefault(),n.onShortcutMove(i)}}},[t("ul",n._l(n.shortcutList,function(i,h){return t("li",{key:i.id,staticClass:"item",class:{current:n.currentIndex===h},attrs:{"data-index":h}},[n._v("\n        "+n._s(i)+"\n      ")])}))])])},staticRenderFns:[]};var c=t("VU/8")(e,r,!1,function(n){t("GhSO")},"data-v-7c22ff45",null).exports,l=t("Sgn/"),a=t("F4+m"),d=t("NYxO"),p=t("mLlr"),z={mixins:[a.a],data:function(){return{singers:[]}},created:function(){this._getSingers()},methods:g()({selectSinger:function(n){this.$router.push({path:"/singer/"+n.id}),this.setSinger(n)},handlePlaylist:function(n){var i=n.length>0?"60px":"";this.$refs.singer.style.bottom=i,this.$refs.list.refresh()},_getSingers:function(){var n=this;Object(l.b)().then(function(i){var t=i.data.artists;t.map(function(n){var i=p(n.name[0],{style:p.STYLE_FIRST_LETTER});n.initial=i[0][0].toUpperCase()}),n.singers=n._normalizeSinger(t)})},_normalizeSinger:function(n){var i={hot:{title:"热门",items:[]}};n.forEach(function(n,t){t<10&&i.hot.items.push(new u.a({id:n.id,name:n.name,avatar:n.img1v1Url,aliaName:n.alias.join(" / ")}));var h=n.initial;i[h]||(i[h]={title:h,items:[]}),i[h].items.push(new u.a({id:n.id,name:n.name,avatar:n.img1v1Url,aliaName:n.alias[0]}))});var t=[],h=[];for(var g in i){var s=i[g];s.title.match(/[A-Z]/)?h.push(s):"热门"===s.title&&t.push(s)}return h.sort(function(n,i){return n.title.charCodeAt(0)-i.title.charCodeAt(0)}),t.concat(h)}},Object(d.d)({setSinger:"SET_SINGER"})),components:{ListView:c}},y={render:function(){var n=this.$createElement,i=this._self._c||n;return i("div",{ref:"singer",staticClass:"singer"},[i("list-view",{ref:"list",attrs:{data:this.singers},on:{select:this.selectSinger}}),this._v(" "),i("router-view")],1)},staticRenderFns:[]};var f=t("VU/8")(z,y,!1,function(n){t("kr00")},"data-v-0f2239e4",null);i.default=f.exports},"0aAL":function(n,i,t){"use strict";var h=t("Zrlr"),g=t.n(h);i.a=function n(i){var t=i.id,h=i.name,u=i.avatar,s=i.aliaName;g()(this,n),this.id=t,this.name=h,this.avatar=u,this.aliaName=s}},BEQ0:function(n,i,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;n.exports=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var i={},t=0;t<10;t++)i["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(i).map(function(n){return i[n]}).join(""))return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(n){h[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},h)).join("")}catch(n){return!1}}()?Object.assign:function(n,i){for(var t,s,o=function(n){if(null===n||void 0===n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}(n),e=1;e<arguments.length;e++){for(var r in t=Object(arguments[e]))g.call(t,r)&&(o[r]=t[r]);if(h){s=h(t);for(var c=0;c<s.length;c++)u.call(t,s[c])&&(o[s[c]]=t[s[c]])}}return o}},GhSO:function(n,i){},"Sgn/":function(n,i,t){"use strict";i.b=function(){var n=u.b+"/top/artists?limit=100";return g.a.get(n)},i.a=function(n){var i=u.b+"/artists?id="+n;return g.a.get(i)};var h=t("mtWM"),g=t.n(h),u=t("W/7t")},Ta2s:function(n,i,t){"use strict";const h=t("BEQ0"),g={NORMAL:0,TONE:1,TONE2:2,TO3NE:5,INITIALS:3,FIRST_LETTER:4},u={style:g.TONE,segment:!1,heteronym:!1},s="b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s".split(","),o=t("hBzM"),e=new RegExp("(["+Object.keys(o).join("")+"])","g"),r=/([aeoiuvnm])([0-4])$/;class c{constructor(n){this._dict=n}convert(n,i){if("string"!=typeof n)return[];i=h({},u,i);let t=[],g="";for(let h,u,s=0,o=n.length;s<o;s++)h=(u=n[s]).charCodeAt(0),this._dict[h]?(g.length>0&&(t.push([g]),g=""),t.push(this.single_pinyin(u,i))):g+=u;return g.length>0&&(t.push([g]),g=""),t}single_pinyin(n,i){if("string"!=typeof n)return[];if(1!==n.length)return this.single_pinyin(n.charAt(0),i);let t=n.charCodeAt(0);if(!this._dict[t])return[n];let h=this._dict[t].split(",");if(!i.heteronym)return[c.toFixed(h[0],i.style)];let g={},u=[];for(let n,t=0,s=h.length;t<s;t++)n=c.toFixed(h[t],i.style),g.hasOwnProperty(n)||(g[n]=n,u.push(n));return u}static toFixed(n,i){let t,h,u="";switch(i){case g.INITIALS:return function(n){for(let i=0,t=s.length;i<t;i++)if(0===n.indexOf(s[i]))return s[i];return""}(n);case g.FIRST_LETTER:return t=n.charAt(0),o.hasOwnProperty(t)&&(t=o[t].charAt(0)),t;case g.NORMAL:return n.replace(e,function(n,i){return o[i].replace(r,"$1")});case g.TO3NE:return n.replace(e,function(n,i){return o[i]});case g.TONE2:return(h=n.replace(e,function(n,i){return u=o[i].replace(r,"$2"),o[i].replace(r,"$1")}))+u;case g.TONE:default:return n}}compare(n,i){const t=this.convert(n,u),h=this.convert(i,u);return String(t).localeCompare(h)}static get STYLE_NORMAL(){return g.NORMAL}static get STYLE_TONE(){return g.TONE}static get STYLE_TONE2(){return g.TONE2}static get STYLE_TO3NE(){return g.TO3NE}static get STYLE_INITIALS(){return g.INITIALS}static get STYLE_FIRST_LETTER(){return g.FIRST_LETTER}static get DEFAULT_OPTIONS(){return u}}n.exports=c},gMVW:function(n,i){n.exports={"èr":"二贰","shí":"十时实蚀","yǐ":"乙已以蚁倚","yī":"一衣医依伊揖壹","chǎng,ān,hàn":"厂","dīng,zhēng":"丁","qī":"七戚欺漆柒凄嘁","bǔ,bo":"卜","rén":"人仁","rù":"入褥","jiǔ":"九久酒玖灸韭","ér":"儿而","bā":"八巴疤叭芭捌笆","jǐ,jī":"几","le,liǎo":"了","lì":"力历厉立励利例栗粒吏沥荔俐莉砾雳痢","dāo":"刀","nǎi":"乃奶","sān":"三叁","yòu":"又右幼诱佑","yú":"于余鱼娱渔榆愚隅逾舆","shì":"士示世市式势事侍饰试视柿是适室逝释誓拭恃嗜","gān,gàn":"干","gōng":"工弓公功攻宫恭躬","kuī":"亏盔窥","tǔ":"土","cùn":"寸","dà,dài,tài":"大","cái":"才材财裁","xià":"下夏","zhàng":"丈仗帐胀障杖账","yǔ,yù,yú":"与","shàng,shǎng":"上","wàn,mò":"万","kǒu":"口","xiǎo":"小晓","jīn":"巾斤今金津筋襟","shān":"山删衫珊","qiān":"千迁牵谦签","qǐ":"乞企启起","chuān":"川穿","gè,gě":"个各","sháo":"勺芍","yì":"亿义艺忆议亦异役译易疫益谊意毅翼屹抑邑绎奕逸肄溢","jí":"及吉级极即急疾集籍棘辑嫉","fán":"凡烦矾樊","xī":"夕西吸希析牺息悉惜稀锡溪熄膝昔晰犀熙嬉蟋","wán":"丸完玩顽","me,mó,ma,yāo":"么","guǎng,ān":"广","wáng,wú":"亡","mén":"门们","shī":"尸失师诗狮施湿虱","zhī":"之支汁芝肢脂蜘","jǐ":"己挤脊","zǐ":"子紫姊籽滓","wèi":"卫未位味畏胃喂慰谓猬蔚魏","yě":"也冶野","nǚ,rǔ":"女","rèn":"刃认韧纫","fēi":"飞非啡","xí":"习席袭媳","mǎ":"马码玛","chā,chá,chǎ":"叉","fēng":"丰封疯峰锋蜂枫","xiāng":"乡香箱厢湘镶","jǐng":"井警阱","wáng,wàng":"王","kāi":"开揩","tiān":"天添","wú":"无吴芜梧蜈","fū,fú":"夫","zhuān":"专砖","yuán":"元园原圆援缘源袁猿辕","yún":"云匀耘","zhā,zā,zhá":"扎","mù":"木目牧墓幕暮慕沐募睦穆","wǔ":"五午伍武侮舞捂鹉","tīng":"厅听","bù,fǒu":"不","qū,ōu":"区","quǎn":"犬","tài":"太态泰汰","yǒu":"友","chē,jū":"车","pǐ":"匹","yóu":"尤由邮犹油游","jù":"巨拒具俱剧距惧锯聚炬","yá":"牙芽崖蚜涯衙","bǐ":"比彼笔鄙匕秕","jiē":"皆阶接街秸","hù":"互户护沪","qiè,qiē":"切","wǎ,wà":"瓦","zhǐ":"止旨址纸指趾","tún,zhūn":"屯","shǎo,shào":"少","rì":"日","zhōng,zhòng":"中","gāng":"冈刚纲缸肛","nèi,nà":"内","bèi":"贝备倍辈狈惫焙","shuǐ":"水","jiàn,xiàn":"见","niú":"牛","shǒu":"手守首","máo":"毛矛茅锚","qì":"气弃汽器迄泣","shēng":"升生声牲笙甥","cháng,zhǎng":"长","shén,shí":"什","piàn,piān":"片","pú,pū":"仆","huà,huā":"化","bì":"币必毕闭毙碧蔽弊避壁庇蓖痹璧","chóu,qiú":"仇","zhuǎ,zhǎo":"爪","jǐn,jìn":"仅","réng":"仍","fù,fǔ":"父","cóng,zòng":"从","fǎn":"反返","jiè":"介戒届界借诫","xiōng":"凶兄胸匈汹","fēn,fèn":"分","fá":"乏伐罚阀筏","cāng":"仓苍舱沧","yuè":"月阅悦跃越岳粤","shì,zhī":"氏","wù":"勿务物误悟雾坞晤","qiàn":"欠歉","fēng,fěng":"风","dān":"丹耽","wū":"乌污呜屋巫诬","fèng":"凤奉","gōu,gòu":"勾","wén":"文闻蚊","liù,lù":"六","huǒ":"火伙","fāng":"方芳","dǒu,dòu":"斗","wèi,wéi":"为","dìng":"订定锭","jì":"计记技忌际季剂迹既继寄绩妓荠寂鲫冀","xīn":"心辛欣新薪锌","chǐ,chě":"尺","yǐn":"引饮蚓瘾","chǒu":"丑","kǒng":"孔恐","duì":"队对","bàn":"办半扮伴瓣绊","yǔ,yú":"予","yǔn":"允陨","quàn":"劝","shū":"书叔殊梳舒疏输蔬抒枢淑","shuāng":"双霜","yù":"玉育狱浴预域欲遇御裕愈誉芋郁喻寓豫","huàn":"幻换唤患宦涣焕痪","kān":"刊堪勘","mò":"末沫漠墨默茉陌寞","jī":"击饥圾机肌鸡积基激讥叽唧畸箕","dǎ,dá":"打","qiǎo":"巧","zhèng,zhēng":"正症挣","pū":"扑","bā,pá":"扒","gān":"甘肝竿柑","qù":"去","rēng":"扔","gǔ":"古谷股鼓","běn":"本","jié,jiē":"节结","shù,shú,zhú":"术","bǐng":"丙柄饼秉禀","kě,kè":"可","zuǒ":"左","bù":"布步怖部埠","shí,dàn":"石","lóng":"龙聋隆咙胧窿","yà":"轧亚讶","miè":"灭蔑","píng":"平评凭瓶萍坪","dōng":"东冬","kǎ,qiǎ":"卡","běi,bèi":"北","yè":"业页夜液谒腋","jiù":"旧救就舅臼疚","shuài":"帅蟀","guī":"归规闺硅瑰","zhàn,zhān":"占","dàn":"旦但诞淡蛋氮","qiě,jū":"且","yè,xié":"叶","jiǎ":"甲钾","dīng":"叮盯","shēn":"申伸身深呻绅","hào,háo":"号","diàn":"电店垫殿玷淀惦奠","tián":"田甜恬","shǐ":"史使始驶矢屎","zhī,zhǐ":"只","yāng":"央殃秧鸯","diāo":"叼雕刁碉","jiào":"叫轿较窖酵","lìng":"另","dāo,tāo":"叨","sì":"四寺饲肆","tàn":"叹炭探碳","qiū":"丘秋蚯","hé":"禾河荷盒","fù":"付负妇附咐赴复傅富腹覆赋缚","dài":"代带贷怠袋逮戴","xiān":"仙先掀锨","yí":"仪宜姨移遗夷胰","bái":"白","zǎi,zǐ,zī":"仔","chì":"斥赤翅","tā":"他它塌","guā":"瓜刮","hū":"乎呼忽","cóng":"丛","lìng,líng,lǐng":"令","yòng":"用","shuǎi":"甩","yìn":"印","lè,yuè":"乐","jù,gōu":"句","cōng":"匆葱聪囱","fàn":"犯饭泛范贩","cè":"册厕测策","wài":"外","chù,chǔ":"处","niǎo":"鸟","bāo":"包胞苞褒","zhǔ":"主煮嘱拄","shǎn":"闪陕","lán":"兰拦栏蓝篮澜","tóu,tou":"头","huì":"汇绘贿惠慧讳诲晦秽","hàn":"汉旱捍悍焊撼翰憾","tǎo":"讨","xué":"穴学","xiě":"写","níng,nìng,zhù":"宁","ràng":"让","lǐ":"礼李里理鲤","xùn":"训讯迅汛驯逊殉","yǒng":"永咏泳勇蛹踊","mín":"民","chū":"出初","ní":"尼","sī":"司丝私斯撕嘶","liáo":"辽疗僚聊寥嘹缭","jiā":"加佳嘉枷","nú":"奴","zhào,shào":"召","biān":"边编鞭蝙","pí":"皮疲脾啤","yùn":"孕运韵酝蕴","fā,fà":"发","shèng":"圣胜剩","tái,tāi":"台苔","jiū":"纠究揪鸠","mǔ":"母亩牡拇姆","káng,gāng":"扛","xíng":"刑形型邢","dòng":"动冻栋洞","kǎo":"考烤拷","kòu":"扣寇","tuō":"托拖脱","lǎo":"老","gǒng":"巩汞拱","zhí":"执直侄值职植","kuò":"扩阔廓","yáng":"扬阳杨洋","dì,de":"地","sǎo,sào":"扫","chǎng,cháng":"场","ěr":"耳尔饵","máng":"芒忙盲茫","xiǔ":"朽","pǔ,pò,pō,piáo":"朴","quán":"权全泉拳痊","guò,guo,guō":"过","chén":"臣尘辰沉陈晨忱","zài":"再在","xié":"协胁斜携鞋谐","yā,yà":"压","yàn":"厌艳宴验雁焰砚唁谚堰","yǒu,yòu":"有","cún":"存","bǎi":"百摆","kuā,kuà":"夸","jiàng":"匠酱","duó":"夺踱","huī":"灰挥恢辉徽","dá":"达","sǐ":"死","liè":"列劣烈猎","guǐ":"轨鬼诡","xié,yá,yé,yú,xú":"邪","jiá,jiā,gā,xiá":"夹","chéng":"成呈诚承城程惩橙","mài":"迈麦卖","huà,huá":"划","zhì":"至志帜制质治致秩智置挚掷窒滞稚","cǐ":"此","zhēn":"贞针侦珍真斟榛","jiān":"尖奸歼坚肩艰兼煎","guāng":"光","dāng,dàng":"当","zǎo":"早枣澡蚤藻","tù,tǔ":"吐","xià,hè":"吓","chóng":"虫崇","tuán":"团","tóng,tòng":"同","qū,qǔ":"曲","diào":"吊钓掉","yīn":"因阴音姻茵","chī":"吃嗤痴","ma,má,mǎ":"吗","yǔ":"屿宇羽","fān":"帆翻","huí":"回茴蛔","qǐ,kǎi":"岂","zé":"则责","suì":"岁碎穗祟遂隧","ròu":"肉","zhū,shú":"朱","wǎng":"网往枉","nián":"年","diū":"丢","shé":"舌","zhú":"竹逐烛","qiáo":"乔侨桥瞧荞憔","wěi":"伟伪苇纬萎","chuán,zhuàn":"传","pāng":"乓","pīng":"乒","xiū,xǔ":"休","fú":"伏扶俘浮符幅福凫芙袱辐蝠","yōu":"优忧悠幽","yán":"延严言岩炎沿盐颜阎蜒檐","jiàn":"件建荐贱剑健舰践鉴键箭涧","rèn,rén":"任","huá,huà,huā":"华","jià,jiè,jie":"价","shāng":"伤商","fèn,bīn":"份","fǎng":"仿访纺","yǎng,áng":"仰","zì":"自字","xiě,xuè":"血","xiàng":"向项象像橡","sì,shì":"似","hòu":"后厚候","zhōu":"舟州周洲","háng,xíng":"行","huì,kuài":"会","shā":"杀纱杉砂","hé,gě":"合","zhào":"兆赵照罩","zhòng":"众仲","yé":"爷","sǎn":"伞","chuàng,chuāng":"创","duǒ":"朵躲","wēi":"危威微偎薇巍","xún":"旬寻巡询循","zá":"杂砸","míng":"名明鸣铭螟","duō":"多哆","zhēng":"争征睁筝蒸怔狰","sè":"色涩瑟","zhuàng":"壮状撞","chōng,chòng":"冲","bīng":"冰兵","zhuāng":"庄装妆桩","qìng":"庆","liú":"刘留流榴琉硫瘤","qí,jì,zī,zhāi":"齐","cì":"次赐","jiāo":"交郊浇娇骄胶椒焦蕉礁","chǎn":"产铲阐","wàng":"妄忘旺望","chōng":"充","wèn":"问","chuǎng":"闯","yáng,xiáng":"羊","bìng,bīng":"并","dēng":"灯登蹬","mǐ":"米","guān":"关官棺","hàn,hán":"汗","jué":"决绝掘诀爵","jiāng":"江姜僵缰","tāng,shāng":"汤","chí":"池驰迟持弛","xīng,xìng":"兴","zhái":"宅","ān":"安氨庵鞍","jiǎng":"讲奖桨蒋","jūn":"军均君钧","xǔ,hǔ":"许","fěng":"讽","lùn,lún":"论","nóng":"农浓脓","shè":"设社舍涉赦","nà,nǎ,nèi,nā":"那","jìn,jǐn":"尽","dǎo":"导岛蹈捣祷","sūn,xùn":"孙","zhèn":"阵振震镇","shōu":"收","fáng":"防妨房肪","rú":"如儒蠕","mā":"妈","xì,hū":"戏","hǎo,hào":"好","tā,jiě":"她","guān,guàn":"观冠","huān":"欢","hóng,gōng":"红","mǎi":"买","xiān,qiàn":"纤","jì,jǐ":"纪济","yuē,yāo":"约","shòu":"寿受授售兽瘦","nòng,lòng":"弄","jìn":"进近晋浸","wéi":"违围唯维桅","yuǎn,yuàn":"远","tūn":"吞","tán":"坛谈痰昙谭潭檀","fǔ":"抚斧府俯辅腐甫脯","huài,pēi,pī,péi":"坏","rǎo":"扰","pī":"批披坯霹","zhǎo":"找沼","chě":"扯","zǒu":"走","chāo":"抄钞超","bà":"坝爸霸","gòng":"贡","zhé,shé,zhē":"折","qiǎng,qiāng,chēng":"抢","zhuā":"抓","xiào":"孝笑效哮啸","pāo":"抛","tóu":"投","kàng":"抗炕","fén":"坟焚","kēng":"坑","dǒu":"抖陡蚪","ké,qiào":"壳","fāng,fáng":"坊","niǔ":"扭纽钮","kuài":"块快筷","bǎ,bà":"把","bào":"报抱爆豹","jié":"劫杰洁捷截竭","què":"却确鹊","huā":"花","fēn":"芬吩纷氛","qín":"芹琴禽勤秦擒","láo":"劳牢","lú":"芦炉卢庐颅","gān,gǎn":"杆","kè":"克刻客课","sū,sù":"苏","dù":"杜渡妒镀","gàng,gāng":"杠","cūn":"村","qiú":"求球囚","xìng":"杏幸性姓","gèng,gēng":"更","liǎng":"两","lì,lí":"丽","shù":"束述树竖恕庶墅漱","dòu":"豆逗痘","hái,huán":"还","fǒu,pǐ":"否","lái":"来莱","lián":"连怜帘莲联廉镰","xiàn,xuán":"县","zhù,chú":"助","dāi":"呆","kuàng":"旷况矿框眶","ya,yā":"呀","zú":"足族","dūn":"吨蹲墩","kùn":"困","nán":"男","chǎo,chāo":"吵","yuán,yún,yùn":"员","chuàn":"串","chuī":"吹炊","ba,bā":"吧","hǒu":"吼","gǎng":"岗","bié,biè":"别","dīng,dìng":"钉","gào":"告","wǒ":"我","luàn":"乱","tū":"秃突凸","xiù":"秀袖绣锈嗅","gū,gù":"估","měi":"每美","hé,hē,hè":"何","tǐ,tī,bèn":"体","bó,bǎi,bà":"伯","zuò":"作坐座做","líng":"伶灵铃陵零龄玲凌菱蛉翎","dī":"低堤滴","yòng,yōng":"佣","nǐ":"你拟","zhù":"住注驻柱祝铸贮蛀","zào":"皂灶造燥躁噪","fó,fú,bì,bó":"佛","chè":"彻撤澈","tuǒ":"妥椭","lín":"邻林临琳磷鳞","hán":"含寒函涵韩","chà":"岔衩","cháng":"肠尝常偿","dù,dǔ":"肚","guī,jūn,qiū":"龟","miǎn":"免勉娩冕缅","jiǎo,jué":"角","kuáng":"狂","tiáo,tiāo":"条","luǎn":"卵","yíng":"迎盈营蝇赢荧莹萤","xì,jì":"系","chuáng":"床","kù":"库裤酷","yìng,yīng":"应","lěng":"冷","zhè,zhèi":"这","xù":"序叙绪续絮蓄旭恤酗婿","xián":"闲贤弦咸衔嫌涎舷","jiān,jiàn":"间监","pàn":"判盼叛畔","mēn,mèn":"闷","wāng":"汪","dì,tì,tuí":"弟","shā,shà":"沙","shà,shā":"煞","càn":"灿","wò":"沃卧握","méi,mò":"没","gōu":"沟钩","shěn,chén":"沈","huái":"怀槐徊淮","sòng":"宋送诵颂讼","hóng":"宏虹洪鸿","qióng":"穷琼","zāi":"灾栽","liáng":"良梁粮粱","zhèng":"证郑政","bǔ":"补捕哺","sù":"诉肃素速塑粟溯","shí,zhì":"识","cí":"词辞慈磁祠瓷雌","zhěn":"诊枕疹","niào,suī":"尿","céng":"层","jú":"局菊橘","wěi,yǐ":"尾","zhāng":"张章彰樟","gǎi":"改","lù":"陆录鹿路赂","ē,ā":"阿","zǔ":"阻组祖诅","miào":"妙庙","yāo":"妖腰邀夭吆","nǔ":"努","jìn,jìng":"劲","rěn":"忍","qū":"驱屈岖蛆躯","chún":"纯唇醇","nà":"纳钠捺","bó":"驳脖博搏膊舶渤","zòng,zǒng":"纵","wén,wèn":"纹","lǘ":"驴","huán":"环","qīng":"青轻倾清蜻氢卿","xiàn":"现限线宪陷馅羡献腺","biǎo":"表","mǒ,mò,mā":"抹","lǒng":"拢垄","dān,dàn,dǎn":"担","bá":"拔跋","jiǎn":"拣茧俭捡检减剪简柬碱","tǎn":"坦毯袒","chōu":"抽","yā":"押鸦鸭","guǎi":"拐","pāi":"拍","zhě":"者","dǐng":"顶鼎","yōng":"拥庸","chāi,cā":"拆","dǐ":"抵","jū,gōu":"拘","lā":"垃","lā,lá":"拉","bàn,pàn":"拌","zhāo":"招昭","pō":"坡泼颇","bō":"拨波玻菠播","zé,zhái":"择","tái":"抬","qí,jī":"其奇","qǔ":"取娶","kǔ":"苦","mào":"茂贸帽貌","ruò,rě":"若","miáo":"苗描瞄","píng,pēng":"苹","yīng":"英樱鹰莺婴缨鹦","qié":"茄","jīng":"茎京经惊晶睛精荆兢鲸","zhī,qí":"枝","bēi":"杯悲碑卑","guì,jǔ":"柜","bǎn":"板版","sōng":"松","qiāng":"枪腔","gòu":"构购够垢","sàng,sāng":"丧","huà":"画话桦","huò":"或货获祸惑霍","cì,cī":"刺","yǔ,yù":"雨语","bēn,bèn":"奔","fèn":"奋粪愤忿","hōng":"轰烘","qī,qì":"妻","ōu":"欧殴鸥","qǐng":"顷请","zhuǎn,zhuàn,zhuǎi":"转","zhǎn":"斩盏展","ruǎn":"软","lún":"轮仑伦沦","dào":"到盗悼道稻","chǐ":"齿耻侈","kěn":"肯垦恳啃","hǔ":"虎","xiē,suò":"些","lǔ":"虏鲁卤","shèn":"肾渗慎","shàng":"尚","guǒ":"果裹","kūn":"昆坤","guó":"国","chāng":"昌猖","chàng":"畅唱","diǎn":"典点碘","gù":"固故顾雇","áng":"昂","zhōng":"忠终钟盅衷","ne,ní":"呢","àn":"岸按案暗","tiě,tiē,tiè,":"帖","luó":"罗萝锣箩骡螺逻","kǎi":"凯慨","lǐng,líng":"岭","bài":"败拜","tú":"图徒途涂屠","chuí":"垂锤捶","zhī,zhì":"知织","guāi":"乖","gǎn":"秆赶敢感橄","hé,hè,huó,huò,hú":"和","gòng,gōng":"供共","wěi,wēi":"委","cè,zè,zhāi":"侧","pèi":"佩配沛","pò,pǎi":"迫","de,dì,dí":"的","pá":"爬","suǒ":"所索锁琐","jìng":"径竞竟敬静境镜靖","mìng":"命","cǎi,cài":"采","niàn":"念","tān":"贪摊滩瘫","rǔ":"乳辱","pín":"贫","fū":"肤麸孵敷","fèi":"肺废沸费吠","zhǒng":"肿","péng":"朋棚蓬膨硼鹏澎篷","fú,fù":"服","féi":"肥","hūn":"昏婚荤","tù":"兔","hú":"狐胡壶湖蝴弧葫","gǒu":"狗苟","bǎo":"饱宝保","xiǎng":"享响想","biàn":"变遍辨辩辫","dǐ,de":"底","jìng,chēng":"净","fàng":"放","nào":"闹","zhá":"闸铡","juàn,juǎn":"卷","quàn,xuàn":"券","dān,shàn,chán":"单","chǎo":"炒","qiǎn,jiān":"浅","fǎ":"法","xiè,yì":"泄","lèi":"泪类","zhān":"沾粘毡瞻","pō,bó":"泊","pào,pāo":"泡","xiè":"泻卸屑械谢懈蟹","ní,nì":"泥","zé,shì":"泽","pà":"怕帕","guài":"怪","zōng":"宗棕踪","shěn":"审婶","zhòu":"宙昼皱骤咒","kōng,kòng,kǒng":"空","láng,làng":"郎","chèn":"衬趁","gāi":"该","xiáng,yáng":"详","lì,dài":"隶","jū":"居鞠驹","shuā,shuà":"刷","mèng":"孟梦","gū":"孤姑辜咕沽菇箍","jiàng,xiáng":"降","mèi":"妹昧媚","jiě":"姐","jià":"驾架嫁稼","cān,shēn,cēn,sān":"参","liàn":"练炼恋链","xì":"细隙","shào":"绍哨","tuó":"驼驮鸵","guàn":"贯惯灌罐","zòu":"奏揍","chūn":"春椿","bāng":"帮邦梆","dú,dài":"毒","guà":"挂卦褂","kuǎ":"垮","kuà,kū":"挎","náo":"挠","dǎng,dàng":"挡","shuān":"拴栓","tǐng":"挺艇","kuò,guā":"括","shí,shè":"拾","tiāo,tiǎo":"挑","wā":"挖蛙洼","pīn":"拼","shèn,shén":"甚","mǒu":"某","nuó":"挪","gé":"革阁格隔","xiàng,hàng":"巷","cǎo":"草","chá":"茶察茬","dàng":"荡档","huāng":"荒慌","róng":"荣绒容熔融茸蓉溶榕","nán,nā":"南","biāo":"标彪膘","yào":"药耀","kū":"枯哭窟","xiāng,xiàng":"相","chá,zhā":"查","liǔ":"柳","bǎi,bó,bò":"柏","yào,yāo":"要","wāi":"歪","yán,yàn":"研","lí":"厘狸离犁梨璃黎漓篱","qì,qiè":"砌","miàn":"面","kǎn":"砍坎","shuǎ":"耍","nài":"耐奈","cán":"残蚕惭","zhàn":"战站栈绽蘸","bèi,bēi":"背","lǎn":"览懒揽缆榄","shěng,xǐng":"省","xiāo,xuē":"削","zhǎ":"眨","hǒng,hōng,hòng":"哄","xiǎn":"显险","mào,mò":"冒","yǎ,yā":"哑","yìng":"映硬","zuó":"昨","xīng":"星腥猩","pā":"趴","guì":"贵桂跪刽","sī,sāi":"思","xiā":"虾瞎","mǎ,mā,mà":"蚂","suī":"虽","pǐn":"品","mà":"骂","huá,huā":"哗","yè,yàn,yān":"咽","zán,zǎ":"咱","hā,hǎ,hà":"哈","yǎo":"咬舀","nǎ,něi,na,né":"哪","hāi,ké":"咳","xiá":"峡狭霞匣侠暇辖","gǔ,gū":"骨","gāng,gàng":"钢","tiē":"贴","yào,yuè":"钥","kàn,kān":"看","jǔ":"矩举","zěn":"怎","xuǎn":"选癣","zhòng,zhǒng,chóng":"种","miǎo":"秒渺藐","kē":"科棵颗磕蝌","biàn,pián":"便","zhòng,chóng":"重","liǎ":"俩","duàn":"段断缎锻","cù":"促醋簇","shùn":"顺瞬","xiū":"修羞","sú":"俗","qīn":"侵钦","xìn,shēn":"信","huáng":"皇黄煌凰惶蝗蟥","zhuī,duī":"追","jùn":"俊峻骏竣","dài,dāi":"待","xū":"须虚需","hěn":"很狠","dùn":"盾顿钝","lǜ":"律虑滤氯","pén":"盆","shí,sì,yì":"食","dǎn":"胆","táo":"逃桃陶萄淘","pàng":"胖","mài,mò":"脉","dú":"独牍","jiǎo":"狡饺绞脚搅","yuàn":"怨院愿","ráo":"饶","wān":"弯湾豌","āi":"哀哎埃","jiāng,jiàng":"将浆","tíng":"亭庭停蜓廷","liàng":"亮谅辆晾","dù,duó":"度","chuāng":"疮窗","qīn,qìng":"亲","zī":"姿资滋咨","dì":"帝递第蒂缔","chà,chā,chāi,cī":"差","yǎng":"养氧痒","qián":"前钱钳潜黔","mí":"迷谜靡","nì":"逆昵匿腻","zhà,zhá":"炸","zǒng":"总","làn":"烂滥","pào,páo,bāo":"炮","tì":"剃惕替屉涕","sǎ,xǐ":"洒","zhuó":"浊啄灼茁卓酌","xǐ,xiǎn":"洗","qià":"洽恰","pài":"派湃","huó":"活","rǎn":"染","héng":"恒衡","hún":"浑魂","nǎo":"恼脑","jué,jiào":"觉","hèn":"恨","xuān":"宣轩喧","qiè":"窃怯","biǎn,piān":"扁","ǎo":"袄","shén":"神","shuō,shuì,yuè":"说","tuì":"退蜕","chú":"除厨锄雏橱","méi":"眉梅煤霉玫枚媒楣","hái":"孩","wá":"娃","lǎo,mǔ":"姥","nù":"怒","hè":"贺赫褐鹤","róu":"柔揉蹂","bǎng":"绑膀","lěi":"垒蕾儡","rào":"绕","gěi,jǐ":"给","luò":"骆洛","luò,lào":"络","tǒng":"统桶筒捅","gēng":"耕羹","hào":"耗浩","bān":"班般斑搬扳颁","zhū":"珠株诸猪蛛","lāo":"捞","fěi":"匪诽","zǎi,zài":"载","mái,mán":"埋","shāo,shào":"捎稍","zhuō":"捉桌拙","niē":"捏","kǔn":"捆","dū,dōu":"都","sǔn":"损笋","juān":"捐鹃","zhé":"哲辙","rè":"热","wǎn":"挽晚碗惋婉","ái,āi":"挨","mò,mù":"莫","è,wù,ě,wū":"恶","tóng":"桐铜童彤瞳","xiào,jiào":"校","hé,hú":"核","yàng":"样漾","gēn":"根跟","gē":"哥鸽割歌戈","chǔ":"础储楚","pò":"破魄","tào":"套","chái":"柴豺","dǎng":"党","mián":"眠绵棉","shài":"晒","jǐn":"紧锦谨","yūn,yùn":"晕","huàng,huǎng":"晃","shǎng":"晌赏","ēn":"恩","ài,āi":"唉","ā,á,ǎ,à,a":"啊","bà,ba,pí":"罢","zéi":"贼","tiě":"铁","zuàn,zuān":"钻","qiān,yán":"铅","quē":"缺","tè":"特","chéng,shèng":"乘","dí":"敌笛涤嘀嫡","zū":"租","chèng":"秤","mì,bì":"秘泌","chēng,chèn,chèng":"称","tòu":"透","zhài":"债寨","dào,dǎo":"倒","tǎng,cháng":"倘","chàng,chāng":"倡","juàn":"倦绢眷","chòu,xiù":"臭","shè,yè,yì":"射","xú":"徐","háng":"航杭","ná":"拿","wēng":"翁嗡","diē":"爹跌","ài":"爱碍艾隘","gē,gé":"胳搁","cuì":"脆翠悴粹","zàng":"脏葬","láng":"狼廊琅榔","féng":"逢","è":"饿扼遏愕噩鳄","shuāi,cuī":"衰","gāo":"高糕羔篙","zhǔn":"准","bìng":"病","téng":"疼腾誊藤","liáng,liàng":"凉量","táng":"唐堂塘膛糖棠搪","pōu":"剖","chù,xù":"畜","páng,bàng":"旁磅","lǚ":"旅屡吕侣铝缕履","fěn":"粉","liào":"料镣","shāo":"烧","yān":"烟淹","tāo":"涛掏滔","lào":"涝酪","zhè":"浙蔗","xiāo":"消宵销萧硝箫嚣","hǎi":"海","zhǎng,zhàng":"涨","làng":"浪","rùn":"润闰","tàng":"烫","yǒng,chōng":"涌","huǐ":"悔毁","qiāo,qiǎo":"悄","hài":"害亥骇","jiā,jia,jie":"家","kuān":"宽","bīn":"宾滨彬缤濒","zhǎi":"窄","lǎng":"朗","dú,dòu":"读","zǎi":"宰","shàn,shān":"扇","shān,shàn":"苫","wà":"袜","xiáng":"祥翔","shuí":"谁","páo":"袍咆","bèi,pī":"被","tiáo,diào,zhōu":"调","yuān":"冤鸳渊","bō,bāo":"剥","ruò":"弱","péi":"陪培赔","niáng":"娘","tōng":"通","néng,nài":"能","nán,nàn,nuó":"难","sāng":"桑","pěng":"捧","dǔ":"堵赌睹","yǎn":"掩眼演衍","duī":"堆","pái,pǎi":"排","tuī":"推","jiào,jiāo":"教","lüè":"掠略","jù,jū":"据","kòng":"控","zhù,zhuó,zhe":"著","jūn,jùn":"菌","lè,lēi":"勒","méng":"萌盟檬朦","cài":"菜","tī":"梯踢剔","shāo,sào":"梢","fù,pì":"副","piào,piāo":"票","shuǎng":"爽","shèng,chéng":"盛","què,qiāo,qiǎo":"雀","xuě":"雪","chí,shi":"匙","xuán":"悬玄漩","mī,mí":"眯","la,lā":"啦","shé,yí":"蛇","lèi,léi,lěi":"累","zhǎn,chán":"崭","quān,juàn,juān":"圈","yín":"银吟淫","bèn":"笨","lóng,lǒng":"笼","mǐn":"敏皿闽悯","nín":"您","ǒu":"偶藕","tōu":"偷","piān":"偏篇翩","dé,děi,de":"得","jiǎ,jià":"假","pán":"盘","chuán":"船","cǎi":"彩睬踩","lǐng":"领","liǎn":"脸敛","māo,máo":"猫","měng":"猛锰","cāi":"猜","háo":"毫豪壕嚎","má":"麻","guǎn":"馆管","còu":"凑","hén":"痕","kāng":"康糠慷","xuán,xuàn":"旋","zhe,zhuó,zháo,zhāo":"着","lǜ,shuài":"率","gài,gě,hé":"盖","cū":"粗","lín,lìn":"淋","qú,jù":"渠","jiàn,jiān":"渐溅","hùn,hún":"混","pó":"婆","qíng":"情晴擎","cǎn":"惨","sù,xiǔ,xiù":"宿","yáo":"窑谣摇遥肴姚","móu":"谋","mì":"密蜜觅","huǎng":"谎恍幌","tán,dàn":"弹","suí":"随","yǐn,yìn":"隐","jǐng,gěng":"颈","shéng":"绳","qí":"骑棋旗歧祈脐畦崎鳍","chóu":"绸酬筹稠愁畴","lǜ,lù":"绿","dā":"搭","kuǎn":"款","tǎ":"塔","qū,cù":"趋","tí,dī,dǐ":"提","jiē,qì":"揭","xǐ":"喜徙","sōu":"搜艘","chā":"插","lǒu,lōu":"搂","qī,jī":"期","rě":"惹","sàn,sǎn":"散","dǒng":"董懂","gě,gé":"葛","pú":"葡菩蒲","zhāo,cháo":"朝","luò,là,lào":"落","kuí":"葵魁","bàng":"棒傍谤","yǐ,yī":"椅","sēn":"森","gùn,hùn":"棍","bī":"逼","zhí,shi":"殖","xià,shà":"厦","liè,liě":"裂","xióng":"雄熊","zàn":"暂赞","yǎ":"雅","chǎng":"敞","zhǎng":"掌","shǔ":"暑鼠薯黍蜀署曙","zuì":"最罪醉","hǎn":"喊罕","jǐng,yǐng":"景","lǎ":"喇","pēn,pèn":"喷","pǎo,páo":"跑","chuǎn":"喘","hē,hè,yè":"喝","hóu":"喉猴","pù,pū":"铺","hēi":"黑","guō":"锅郭","ruì":"锐瑞","duǎn":"短","é":"鹅额讹俄","děng":"等","kuāng":"筐","shuì":"税睡","zhù,zhú":"筑","shāi":"筛","dá,dā":"答","ào":"傲澳懊","pái":"牌徘","bǎo,bǔ,pù":"堡","ào,yù":"奥","fān,pān":"番","là,xī":"腊","huá":"猾滑","rán":"然燃","chán":"馋缠蝉","mán":"蛮馒","tòng":"痛","shàn":"善擅膳赡","zūn":"尊遵","pǔ":"普谱圃浦","gǎng,jiǎng":"港","céng,zēng":"曾","wēn":"温瘟","kě":"渴","zhā":"渣","duò":"惰舵跺","gài":"溉概丐钙","kuì":"愧","yú,tōu":"愉","wō":"窝蜗","cuàn":"窜篡","qún":"裙群","qiáng,qiǎng,jiàng":"强","shǔ,zhǔ":"属","zhōu,yù":"粥","sǎo":"嫂","huǎn":"缓","piàn":"骗","mō":"摸","shè,niè":"摄","tián,zhèn":"填","gǎo":"搞稿镐","suàn":"蒜算","méng,mēng,měng":"蒙","jìn,jīn":"禁","lóu":"楼娄","lài":"赖癞","lù,liù":"碌","pèng":"碰","léi":"雷","báo":"雹","dū":"督","nuǎn":"暖","xiē":"歇楔蝎","kuà":"跨胯","tiào,táo":"跳","é,yǐ":"蛾","sǎng":"嗓","qiǎn":"遣谴","cuò":"错挫措锉","ǎi":"矮蔼","shǎ":"傻","cuī":"催摧崔","tuǐ":"腿","chù":"触矗","jiě,jiè,xiè":"解","shù,shǔ,shuò":"数","mǎn":"满","liū,liù":"溜","gǔn":"滚","sāi,sài,sè":"塞","pì,bì":"辟","dié":"叠蝶谍碟","fèng,féng":"缝","qiáng":"墙","piě,piē":"撇","zhāi":"摘斋","shuāi":"摔","mó,mú":"模","bǎng,bàng":"榜","zhà":"榨乍诈","niàng":"酿","zāo":"遭糟","suān":"酸","shang,cháng":"裳","sòu":"嗽","là":"蜡辣","qiāo":"锹敲跷","zhuàn":"赚撰","wěn":"稳吻紊","bí":"鼻荸","mó":"膜魔馍摹蘑","xiān,xiǎn":"鲜","yí,nǐ":"疑","gāo,gào":"膏","zhē":"遮","duān":"端","màn":"漫慢曼幔","piāo,piào,piǎo":"漂","lòu":"漏陋","sài":"赛","nèn":"嫩","dèng":"凳邓瞪","suō,sù":"缩","qù,cù":"趣","sā,sǎ":"撒","tàng,tāng":"趟","chēng":"撑","zēng":"增憎","cáo":"槽曹","héng,hèng":"横","piāo":"飘","mán,mén":"瞒","tí":"题蹄啼","yǐng":"影颖","bào,pù":"暴","tà":"踏蹋","kào":"靠铐","pì":"僻屁譬","tǎng":"躺","dé":"德","mó,mā":"摩","shú":"熟秫赎","hú,hū,hù":"糊","pī,pǐ":"劈","cháo":"潮巢","cāo":"操糙","yàn,yān":"燕","diān":"颠掂","báo,bó,bò":"薄","cān":"餐","xǐng":"醒","zhěng":"整拯","zuǐ":"嘴","zèng":"赠","mó,mò":"磨","níng":"凝狞柠","jiǎo,zhuó":"缴","cā":"擦","cáng,zàng":"藏","fán,pó":"繁","bì,bei":"臂","bèng":"蹦泵","pān":"攀潘","chàn,zhàn":"颤","jiāng,qiáng":"疆","rǎng":"壤攘","jiáo,jué,jiào":"嚼","rǎng,rāng":"嚷","chǔn":"蠢","lù,lòu":"露","náng,nāng":"囊","dǎi":"歹","rǒng":"冗","hāng,bèn":"夯","āo,wā":"凹","féng,píng":"冯","yū":"迂淤","xū,yù":"吁","lèi,lē":"肋","kōu":"抠","lūn,lún":"抡","jiè,gài":"芥","xīn,xìn":"芯","chā,chà":"杈","xiāo,xiào":"肖","zhī,zī":"吱","ǒu,ōu,òu":"呕","nà,nè":"呐","qiàng,qiāng":"呛","tún,dùn":"囤","kēng,háng":"吭","shǔn":"吮","diàn,tián":"佃","sì,cì":"伺","zhǒu":"肘帚","diàn,tián,shèng":"甸","páo,bào":"刨","lìn":"吝赁躏","duì,ruì,yuè":"兑","zhuì":"坠缀赘","kē,kě":"坷","tuò,tà,zhí":"拓","fú,bì":"拂","nǐng,níng,nìng":"拧","ào,ǎo,niù":"拗","kē,hē":"苛","yān,yǎn":"奄","hē,a,kē":"呵","gā,kā":"咖","biǎn":"贬匾","jiǎo,yáo":"侥","chà,shā":"刹","āng":"肮","wèng":"瓮","nüè,yào":"疟","páng":"庞螃","máng,méng":"氓","gē,yì":"疙","jǔ,jù":"沮","zú,cù":"卒","nìng":"泞","chǒng":"宠","wǎn,yuān":"宛","mí,mǐ":"弥","qì,qiè,xiè":"契","xié,jiā":"挟","duò,duǒ":"垛","jiá":"荚颊","zhà,shān,shi,cè":"栅","bó,bèi":"勃","zhóu,zhòu":"轴","nüè":"虐","liē,liě,lié,lie":"咧","dǔn":"盹","xūn":"勋","yo,yō":"哟","mī":"咪","qiào,xiào":"俏","hóu,hòu":"侯","pēi":"胚","tāi":"胎","luán":"峦","sà":"飒萨","shuò":"烁","xuàn":"炫","píng,bǐng":"屏","nà,nuó":"娜","pá,bà":"耙","gěng":"埂耿梗","niè":"聂镊孽","mǎng":"莽","qī,xī":"栖","jiǎ,gǔ":"贾","chěng":"逞","pēng":"砰烹","láo,lào":"唠","bàng,bèng":"蚌","gōng,zhōng":"蚣","li,lǐ,lī":"哩","suō":"唆梭嗦","hēng":"哼","zāng":"赃","qiào":"峭窍撬","mǎo":"铆","ǎn":"俺","sǒng":"耸","juè,jué":"倔","yīn,yān,yǐn":"殷","guàng":"逛","něi":"馁","wō,guō":"涡","lào,luò":"烙","nuò":"诺懦糯","zhūn":"谆","niǎn,niē":"捻","qiā":"掐","yè,yē":"掖","chān,xiān,càn,shǎn":"掺","dǎn,shàn":"掸","fēi,fěi":"菲","qián,gān":"乾","shē":"奢赊","shuò,shí":"硕","luō,luó,luo":"啰","shá":"啥","hǔ,xià":"唬","tuò":"唾","bēng":"崩","dāng,chēng":"铛","xiǎn,xǐ":"铣","jiǎo,jiáo":"矫","tiáo":"笤","kuǐ,guī":"傀","xìn":"衅","dōu":"兜","jì,zhài":"祭","xiáo":"淆","tǎng,chǎng":"淌","chún,zhūn":"淳","shuàn":"涮","dāng":"裆","wèi,yù":"尉","duò,huī":"堕","chuò,chāo":"绰","bēng,běng,bèng":"绷","zōng,zèng":"综","zhuó,zuó":"琢","chuǎi,chuài,chuāi,tuán,zhuī":"揣","péng,bāng":"彭","chān":"搀","cuō":"搓","sāo":"搔","yē":"椰","zhuī,chuí":"椎","léng,lēng,líng":"棱","hān":"酣憨","sū":"酥","záo":"凿","qiào,qiáo":"翘","zhā,chā":"喳","bǒ":"跛","há,gé":"蛤","qiàn,kàn":"嵌","bāi":"掰","yān,ā":"腌","wàn":"腕","dūn,duì":"敦","kuì,huì":"溃","jiǒng":"窘","sāo,sǎo":"骚","pìn":"聘","bǎ":"靶","xuē":"靴薛","hāo":"蒿","léng":"楞","kǎi,jiē":"楷","pín,bīn":"频","zhuī":"锥","tuí":"颓","sāi":"腮","liú,liù":"馏","nì,niào":"溺","qǐn":"寝","luǒ":"裸","miù":"谬","jiǎo,chāo":"剿","áo,āo":"熬","niān":"蔫","màn,wàn":"蔓","chá,chā":"碴","xūn,xùn":"熏","tiǎn":"舔","sēng":"僧","da,dá":"瘩","guǎ":"寡","tuì,tùn":"褪","niǎn":"撵碾","liáo,liāo":"撩","cuō,zuǒ":"撮","ruǐ":"蕊","cháo,zhāo":"嘲","biē":"憋鳖","hēi,mò":"嘿","zhuàng,chuáng":"幢","jī,qǐ":"稽","lǒu":"篓","lǐn":"凛檩","biě,biē":"瘪","liáo,lào,lǎo":"潦","chéng,dèng":"澄","lèi,léi":"擂","piáo":"瓢","shà":"霎","mò,má":"蟆","qué":"瘸","liáo,liǎo":"燎","liào,liǎo":"瞭","sào,sāo":"臊","mí,méi":"糜","ái":"癌","tún":"臀","huò,huō,huá":"豁","pù,bào":"瀑","chuō":"戳","zǎn,cuán":"攒","cèng":"蹭","bò,bǒ":"簸","bó,bù":"簿","bìn":"鬓","suǐ":"髓","ráng":"瓤"}},hBzM:function(n,i){n.exports={"ā":"a1","á":"a2","ǎ":"a3","à":"a4","ē":"e1","é":"e2","ě":"e3","è":"e4","ō":"o1","ó":"o2","ǒ":"o3","ò":"o4","ī":"i1","í":"i2","ǐ":"i3","ì":"i4","ū":"u1","ú":"u2","ǔ":"u3","ù":"u4","ü":"v0","ǘ":"v2","ǚ":"v3","ǜ":"v4","ń":"n2","ň":"n3","":"m2"}},kr00:function(n,i){},mLlr:function(n,i,t){"use strict";const h=function(n){let i,t={};for(let h in n)for(let g,u=0,s=(i=n[h]).length;u<s;u++)g=i.charCodeAt(u),t.hasOwnProperty(g)?t[g]+=","+h:t[g]=h;return t}(t("gMVW")),g=t("Ta2s"),u=new g(h);n.exports=u.convert.bind(u),n.exports.compare=u.compare.bind(u),n.exports.STYLE_NORMAL=g.STYLE_NORMAL,n.exports.STYLE_TONE=g.STYLE_TONE,n.exports.STYLE_TONE2=g.STYLE_TONE2,n.exports.STYLE_TO3NE=g.STYLE_TO3NE,n.exports.STYLE_INITIALS=g.STYLE_INITIALS,n.exports.STYLE_FIRST_LETTER=g.STYLE_FIRST_LETTER}});
//# sourceMappingURL=1.478890dc0704a60499cc.js.map