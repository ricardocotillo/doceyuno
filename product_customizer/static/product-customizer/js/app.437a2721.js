(function(e){function t(t){for(var i,a,s=t[0],c=t[1],l=t[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},1165:function(e,t,n){"use strict";n("6e1d")},2:function(e,t){},"23fd":function(e,t,n){"use strict";n("9021")},"28d6":function(e,t,n){"use strict";n("46f2")},3:function(e,t){},"336c":function(e,t,n){e.exports=n.p+"../../static/product-customizer/img/back.a5fdd080.png"},"3c90":function(e,t,n){},4266:function(e,t,n){},"46f2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Designer")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.showLoader?n("div",{ref:"loader",staticClass:"loader"},[n("font-awesome-icon",{style:{color:"#212032"},attrs:{icon:"spinner",spin:"",size:"3x"}})],1):e._e(),0===e.step?n("ShirtInfo",{on:{colorChange:e.changeColor,imageAdded:e.addImage,imageDeleted:e.deleteImage,download:e.download}}):n("ProductInfo",{on:{download:e.download}}),n("Customizer",{ref:"customizer",attrs:{color:e.chosenColor,image:e.image,imageHeight:e.imageHeight,imageWidth:e.imageWidth,showImage:e.showImage}})],1)},s=[],c=(n("99af"),n("4160"),n("b64b"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),l=n("a78e"),u=n.n(l),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[e.showColorPicker?n("div",{staticClass:"sidebar-body"},[n("div",[n("p",[n("b",[e._v("Selecciona los colores que quieres ofrecer")]),n("br"),n("small",[e._v(e._s(e.colorsChosen.length+" color"+(e.colorsChosen.length>1?"es":"")+" seleccionado"+(e.colorsChosen.length>1?"s":"")))])]),n("div",{staticClass:"color-wrapper"},e._l(e.colors,(function(t){return n("div",{key:t,staticClass:"color color-pick",style:{background:t},on:{click:function(n){return e.addColor(t)}}},[e.colorsChosen.some((function(e){return e===t}))?n("font-awesome-icon",{style:{color:"#ffffff"===t||"#d6d5d5"===t?"black":"white"},attrs:{icon:"check"}}):e._e()],1)})),0)]),e.colorsChosen.length>0?n("button",{on:{click:function(t){e.showColorPicker=!1}}},[e._v("Terminar")]):e._e()]):[n("div",{staticClass:"sidebar-header"},[n("font-awesome-icon",{attrs:{icon:"arrow-left",size:"lg",id:"back-arrow"},on:{click:e.goBack}}),n("h2",{staticClass:"title"},[e._v("Crea tu producto")])],1),n("div",{staticClass:"sidebar-body"},[n("div",[n("h4",[e._v("Diseña tu producto")]),n("small",[e._v("Tamaño máximo de archivo 50MB")]),n("div",{staticClass:"button-group"},[""===e.image?n("button",{on:{click:e.doclickInput}},[n("font-awesome-icon",{attrs:{icon:"image",size:"lg"}})],1):n("button",{on:{click:e.deleteImage}},[n("font-awesome-icon",{attrs:{icon:"trash-alt",size:"lg"}})],1),n("input",{ref:"fileInput",attrs:{type:"file",hidden:""},on:{change:e.addImage}})]),n("hr"),e._m(0),n("div",{staticClass:"color-wrapper"},[e._l(e.colorsChosen,(function(t){return n("div",{key:t,staticClass:"color",style:{background:t},on:{click:function(n){return e.chooseColor(t)}}})})),n("div",{staticClass:"add-color",on:{click:function(t){e.showColorPicker=!0}}},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1)],2),n("hr"),e._m(1),n("div",{staticClass:"calculator"},[n("div",{staticClass:"input-group"},[n("span",[e._v(e._s(e.currency))]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.price,expression:"price",modifiers:{number:!0}}],attrs:{id:"price",type:"text",name:"price"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e.profit>0?n("small",{staticClass:"profit"},[e._v("S/"+e._s(e.profit.toFixed(2))+" ganancia/venta")]):n("small",{style:{color:"red"}},[e._v("Sin ganancias")])])]),n("div",[n("button",{on:{click:e.moveToProductInfo}},[e._v("Continuar")])])])]],2)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("b",[e._v("Selecciona colores")]),n("br"),n("small",[e._v("Selecciona múltiples colores para ofrecer")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("b",[e._v("Define tu precio de venta")]),n("br"),n("small",[e._v("Este es el precio que veran los usuarios")])])}],f=(n("45fc"),n("ac1f"),n("5319"),{data:function(){return{fileAdded:!1,cost:19.99,price:49.99,currency:"",colors:[],showColorPicker:!1}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=u.a.get("csrftoken"),t.next=3,fetch("/shop/store-info/",{headers:{"X-CSRFToken":n}});case 3:return i=t.sent,t.next=6,i.json();case 6:r=t.sent,e.cost=r.basePrice,e.currency=r.currencySymbol,e.colors=r.colors;case 10:case"end":return t.stop()}}),t)})))()},methods:{goBack:function(){window.location.replace("/")},descargar:function(){this.$emit("download")},moveToProductInfo:function(){""!==this.image&&"number"===typeof this.price?(this.$store.commit("addPrice",this.price),this.$store.commit("moveToProductInfo")):this.$toasted.error("Una imagen y un precio válido son requeridos.")},doclickInput:function(){this.$refs.fileInput.click()},addImage:function(e){var t=this;this.fileAdded=!0;var n=new FileReader;n.onload=function(e){var n=e.target.result,i=new Image;i.src=n,i.onload=function(){var e=i.width,r=i.height;t.$store.commit("addImage",{url:n,width:e,height:r})}},n.readAsDataURL(e.target.files[0])},deleteImage:function(){this.$store.commit("deleteImage")},addColor:function(e){if(!this.$store.state.colors.some((function(t){return t===e})))return this.$store.commit("addColor",e);this.$store.commit("removeColor",e)},chooseColor:function(e){this.$store.commit("chooseColor",e)}},computed:{colorsChosen:function(){return this.$store.state.colors},image:function(){return this.$store.state.image.url},profit:function(){return this.price-this.cost}}}),p=f,m=(n("1165"),n("2877")),g=Object(m["a"])(p,d,h,!1,null,"f24b8bea",null),b=g.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"mainPane",staticClass:"mainPane"},[i("div",{staticClass:"mainPaneContent"},[i("div",{staticClass:"productCustomizer"},[e._m(0),i("div",{staticClass:"designArea"},[i("div",{ref:"productImage",staticClass:"designBase",style:{"background-color":e.color,width:e.baseWidth+"px",height:e.baseWidth+"px"}},[i("svg",{ref:"image",staticClass:"designSvg",style:{top:e.baseWidth/3.5+"px",left:(e.baseWidth-e.printableWidth)/1.93+"px"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 3508 4961",width:""+e.printableWidth,height:""+e.printableHeight}},[e.image.url?i("g",{style:{cursor:"pointer"},attrs:{transform:"matrix("+3508/e.image.width*e.editInfo.scaleX+" 0 0 "+3508/e.image.width*e.editInfo.scaleX+" "+3508*e.editInfo.transX+" "+3508*e.editInfo.transY+")"},on:{click:function(t){e.editing=!0}}},[i("image",{attrs:{href:e.image.url,width:e.image.width,height:e.image.height}})]):e._e()]),i("img",{staticClass:"mask",attrs:{src:n("9e01")("./"+(e.front?"front":"back")+".png"),alt:""}}),0===e.step?i("div",{staticClass:"printableArea outlined",style:{top:e.baseWidth/3.5+"px",left:(e.baseWidth-e.printableWidth)/1.93+"px",width:e.printableWidth+"px",height:e.printableHeight+"px"}},[e.editing?i("vue-draggable-resizable",{attrs:{w:e.selectBoxWidth,h:e.selectBoxHeight,x:e.selectBox.x,y:e.selectBox.y,z:999,lockAspectRatio:"",parent:"",active:"",handles:["tl","tr","br","bl"]},on:{dragging:e.onDrag,resizing:e.onResize,deactivated:function(t){e.editing=!1}}}):e._e()],1):e._e()])])])])])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"areaSwitcher"},[n("div",{staticClass:"productTemplateSwitcher"})])}],x=n("bdd1"),_=n("e774"),y={data:function(){return{editing:!1,front:!0,baseWidth:0,printableWidth:0,printableHeight:0,editInfo:{transX:0,transY:0,scaleX:1,scaleY:1},selectBox:{x:0,y:0,w:1,h:1}}},methods:{svgToPng:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=(new XMLSerializer).serializeToString(e.$refs.image),n=n.replace('width="'.concat(e.printableWidth,'"'),'width="3508"'),n=n.replace('height="'.concat(e.printableHeight,'"'),'height="4960"'),t.next=5,Object(x["svg2png"])({input:n,encoding:"dataURL",format:"png"});case 5:return i=t.sent,t.next=8,fetch(i);case 8:return r=t.sent,t.next=11,r.blob();case 11:return o=t.sent,t.abrupt("return",new File([o],"nueva_imagen.png",{type:"image/png"}));case 13:case"end":return t.stop()}}),t)})))()},htmlToJpeg:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["a"])(e.$refs.productImage);case 2:return n=t.sent,t.next=5,fetch(n);case 5:return i=t.sent,t.next=8,i.blob();case 8:return r=t.sent,t.abrupt("return",new File([r],"product_image.jpg",{type:"image/jpeg"}));case 10:case"end":return t.stop()}}),t)})))()},onResize:function(e,t,n,i){this.editInfo.transX=e/this.printableWidth,this.selectBox.x=e,this.editInfo.transY=t/this.printableWidth,this.selectBox.y=t,this.editInfo.scaleX=n/this.printableWidth,this.selectBox.w=n/this.printableWidth,this.editInfo.scaleY=i/this.printableWidth,this.selectBox.h=i/this.printableWidth},onDrag:function(e,t){this.editInfo.transX=e/this.printableWidth,this.selectBox.x=e,this.editInfo.transY=t/this.printableWidth,this.selectBox.y=t}},computed:{step:function(){return this.$store.state.step},ratio:function(){return 3508/this.image.width},selectBoxWidth:function(){return this.image.width*(this.printableWidth*this.ratio/3508)*this.selectBox.w},selectBoxHeight:function(){return this.image.height*(this.printableWidth*this.ratio/3508)*this.selectBox.w},image:function(){return this.$store.state.image},color:function(){return this.$store.state.chosenColor}},mounted:function(){var e=this;this.baseWidth=Math.floor(window.innerWidth/2.5),this.printableWidth=Math.floor(window.innerWidth/6.8),this.printableHeight=1.4142*this.printableWidth,window.onresize=function(t){e.editing=!1,e.baseWidth=Math.floor(t.target.innerWidth/2.5),e.printableWidth=Math.floor(window.innerWidth/6.8),e.printableHeight=1.4142*e.printableWidth}}},C=y,k=(n("28d6"),Object(m["a"])(C,v,w,!1,null,null,null)),I=k.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Sidebar",{scopedSlots:e._u([{key:"header",fn:function(){return[n("font-awesome-icon",{staticClass:"arrow-back",attrs:{icon:"arrow-left",size:"lg",id:"back-arrow"},on:{click:e.goBack}}),n("h2",{staticClass:"title"},[e._v("Detalle de campaña")])]},proxy:!0},{key:"body",fn:function(){return[n("div",[n("CustomInput",{attrs:{required:"",placeholder:"Título de tu campaña",type:"text",name:"title",width:"100%"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),n("br"),n("br"),n("CustomInput",{attrs:{required:"",placeholder:"Descripción de campaña",type:"textarea",name:"description",width:"100%"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),n("br"),n("br"),n("CustomInput",{attrs:{label:"¿Cuanto quieres que dure tu campaña?",required:"",width:"100%",type:"select",options:e.options},model:{value:e.duration,callback:function(t){e.duration=e._n(t)},expression:"duration"}})],1),n("button",{on:{click:e.descargar}},[e._v("Terminar")])]},proxy:!0}])})},W=[],S=(n("a4d3"),n("e01a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("div",{staticClass:"sidebar-header"},[e._t("header")],2),n("div",{staticClass:"sidebar-body"},[e._t("body")],2)])}),P=[],O={},j=O,T=(n("f420"),Object(m["a"])(j,S,P,!1,null,"c8acfd1c",null)),B=T.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-group"},[n("label",[e._v(e._s(e.label))]),n("br"),n("br"),"textarea"!==e.type?n("span",[e._v(e._s(e.prefix))]):e._e(),"text"===e.type?n("input",{class:{"has-prefix":"undefined"!==typeof e.prefix},style:e.getStyle,attrs:{required:e.required,type:e.type,name:e.name,placeholder:e.placeholder},domProps:{value:e.value},on:{input:e.handle}}):e._e(),"textarea"===e.type?n("textarea",{class:{"has-prefix":"undefined"!==typeof e.prefix},style:e.getStyle,attrs:{required:e.required,rows:"10",placeholder:e.placeholder},domProps:{value:e.value},on:{input:e.handle}}):e._e(),"select"===e.type?n("select",{style:e.getStyle,attrs:{required:e.required},domProps:{value:e.value},on:{change:e.handle}},[e.placeholder?n("option",{attrs:{value:"",disabled:"",hidden:"",selected:""}},[e._v(e._s(e.placeholder))]):e._e(),e._l(e.options,(function(t){return n("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.text)+" "+e._s(0===t.value?"":"días"))])}))],2):e._e()])},D=[],R=(n("a9e3"),{props:{value:[String,Number],type:String,name:String,prefix:String,placeholder:String,width:String,options:Array,label:String,required:Boolean},methods:{handle:function(e){this.$emit("input",e.target.value)}},computed:{getStyle:function(){var e={};return this.width&&(e.width=this.width),e}}}),q=R,E=(n("d184"),Object(m["a"])(q,z,D,!1,null,"24d7863e",null)),H=E.exports,M={data:function(){return{title:"",description:"",duration:0,options:[{value:0,text:"Duración indefinida"},{value:15,text:"11"},{value:21,text:"21"},{value:30,text:"30"}]}},methods:{goBack:function(){this.$store.commit("moveToShirtInfo")},descargar:function(){""!==this.title&&""!==this.description?(this.$store.commit("addTitle",this.title),this.$store.commit("addDesc",this.description),this.$store.commit("addDuration",this.duration),this.$emit("download")):this.$toasted.error("Un título, una descripción y una duración válidos son requeridos.")}},components:{Sidebar:B,CustomInput:H}},X=M,A=(n("23fd"),Object(m["a"])(X,$,W,!1,null,"5e6a4316",null)),F=A.exports,L={data:function(){return{showLoader:!1,chosenColor:"#ffffff",image:"",imageWidth:0,imageHeight:0,showImage:!1}},computed:{step:function(){return this.$store.state.step}},methods:{download:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,i,r,o,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showLoader=!0,t.next=3,e.$refs.customizer.svgToPng();case 3:return n=t.sent,t.next=6,e.$refs.customizer.htmlToJpeg();case 6:return i=t.sent,r=new FormData,r.set("name",e.$store.state.title),r.set("description",e.$store.state.desc),e.$store.state.colors.forEach((function(e){return r.append("colors",e)})),r.set("default_color",e.$store.state.chosenColor),r.set("price",e.$store.state.price),r.set("duration",e.$store.state.duration),r.set("print_image",n),r.set("image",i),o=u.a.get("csrftoken"),t.next=19,fetch("/shop/create-product/",{method:"POST",body:r,headers:{"X-CSRFToken":o}});case 19:if(a=t.sent,200!==a.status){t.next=24;break}e.$toasted.success("Producto creado"),t.next=28;break;case 24:return t.next=26,a.json();case 26:s=t.sent,Object.keys(s).forEach((function(t){e.$toasted.error("".concat(t,": ").concat(s[t][0]))}));case 28:e.showLoader=!1;case 29:case"end":return t.stop()}}),t)})))()},changeColor:function(e){this.chosenColor=e},deleteImage:function(){this.image="",this.imageWidth=0,this.imageHeight=0,this.showImage=!1},addImage:function(e){var t=this,n=new FileReader;n.onload=function(e){var n=e.target.result;t.image=n;var i=new Image;i.src=n,i.onload=function(){t.imageWidth=i.width,t.imageHeight=i.height,t.showImage=!0}},n.readAsDataURL(e)}},components:{ShirtInfo:b,Customizer:I,ProductInfo:F}},U=L,Y=(n("f2eb"),Object(m["a"])(U,a,s,!1,null,"794c87a4",null)),J=Y.exports,N={name:"App",components:{Designer:J}},G=N,K=(n("034f"),Object(m["a"])(G,r,o,!1,null,null,null)),Q=K.exports,V=n("a65d"),Z=n.n(V),ee=n("fb19"),te=n.n(ee),ne=n("ecee"),ie=n("c074"),re=n("ad3d"),oe=(n("278f"),n("f5df1"),n("4de4"),n("2f62"));i["a"].use(oe["a"]);var ae=new oe["a"].Store({state:{image:{url:"",width:0,height:0},chosenColor:"#ffffff",colors:["#ffffff"],price:0,title:"",desc:"",duration:0,step:0},mutations:{addDuration:function(e,t){e.duration=t},addTitle:function(e,t){e.title=t},addDesc:function(e,t){e.desc=t},addColor:function(e,t){e.colors.push(t)},removeColor:function(e,t){e.colors=this.colors.filter((function(e){return e!==t}))},addPrice:function(e,t){e.price=t},addImage:function(e,t){e.image=t},deleteImage:function(e){e.image={url:"",width:0,height:0}},chooseColor:function(e,t){e.chosenColor=t},moveToProductInfo:function(e){e.step=1},moveToShirtInfo:function(e){e.step=0}},actions:{},modules:{}});i["a"].use(Z.a,{duration:6e3,singleton:!0,position:"bottom-center"}),ne["c"].add(ie["d"],ie["c"],ie["e"],ie["b"],ie["a"],ie["g"],ie["f"]),i["a"].component("font-awesome-icon",re["a"]),i["a"].component("vue-draggable-resizable",te.a),i["a"].config.productionTip=!1,new i["a"]({store:ae,render:function(e){return e(Q)}}).$mount("#app")},"6e1d":function(e,t,n){},"85ec":function(e,t,n){},9021:function(e,t,n){},"9e01":function(e,t,n){var i={"./back.png":"336c","./front.png":"ab34"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id="9e01"},ab34:function(e,t,n){e.exports=n.p+"../../static/product-customizer/img/front.d1449e7c.png"},d184:function(e,t,n){"use strict";n("f457")},f2eb:function(e,t,n){"use strict";n("3c90")},f420:function(e,t,n){"use strict";n("4266")},f457:function(e,t,n){}});
//# sourceMappingURL=app.437a2721.js.map