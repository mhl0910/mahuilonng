webpackJsonp([5],{"/+gH":function(t,i){},"8wAl":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={name:"carList",data:function(){return{list:[],data:[],show:!0}},props:{flag:"",Fn:{type:Function}},methods:{init:function(){var t=this;fetch("https://baojia.chelun.com/v1-city-alllist.html").then(function(i){i.json().then(function(i){t.list=i.data})})},clickLi:function(t){var i=this;fetch("https://baojia.chelun.com/v1-city-alllist.html?provinceid="+t).then(function(t){t.json().then(function(t){i.data=t.data,console.log(i.data),i.changeShow()})})},changeShow:function(){this.show=!this.show}},mounted:function(){this.init()}},e={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"carList_box",attrs:{id:t.flag?"on":""}},[n("main",[n("h1",[t._v("省市")]),t._v(" "),n("ul",t._l(t.list,function(i,a){return n("li",{key:a,on:{click:function(n){t.clickLi(i.CityID)}}},[n("span",[t._v(t._s(i.CityName))])])}))]),t._v(" "),n("div",{staticClass:"citybox",class:t.show?"active":"",on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.changeShow(i)}}},[n("ul",t._l(t.data,function(i,a){return n("li",{key:a,on:{click:function(n){t.Fn(i.CityName)}}},[n("span",[t._v(t._s(i.CityName))])])}))])])},staticRenderFns:[]};var s={name:"Price",data:function(){return{cityId:"",cityName:"",infoData:{},showCity:!1}},components:{CarList:n("VU/8")(a,e,!1,function(t){n("dnem")},null,null).exports},methods:{init:function(){var t=this,i=(this.$route.query.id,this.$route.query.carId);fetch("https://baojia.chelun.com/location-client.html").then(function(n){n.json().then(function(n){console.log(n.data),t.cityId=n.data.CityID,t.cityName=n.data.CityName,fetch("https://baojia.chelun.com/v2-dealer-alllist.html?carId="+i+"&cityId="+n.data.CityID).then(function(i){i.json().then(function(i){t.infoData=i.data})})})})},cityChange:function(t){this.showCity=!this.showCity,t&&(this.cityName=t)}},mounted:function(){this.init()}},c={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"p"},[t._m(0),t._v(" "),n("section",{staticClass:"content"},[n("div",{staticClass:"q-info"},[n("img",{attrs:{src:t.infoData.details?t.infoData.details.serial.Picture:""}}),t._v(" "),n("div",[n("p",[t._v(t._s(t.infoData.details?t.infoData.details.serial.AliasName:""))]),t._v(" "),n("p",[n("span",[t._v(t._s(t.infoData.details?t.infoData.details.market_attribute.year:"")+"款")]),t._v(" "),n("span",[t._v(t._s(t.infoData.details?t.infoData.details.car_name:""))])])])]),t._v(" "),n("div",{staticClass:"self-info"},[n("p",{staticClass:"tip"},[t._v("个人信息")]),t._v(" "),n("ul",[t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",[n("span",[t._v("城市")]),n("span",{on:{click:t.cityChange}},[t._v(t._s(t.cityName))])])]),t._v(" "),t._m(3)]),t._v(" "),n("div",{staticClass:"dealer-info"},[n("p",{staticClass:"tip"},[t._v("选择报价经销商")]),t._v(" "),n("ul",t._l(t.infoData.list,function(i,a){return n("li",{key:a},[n("p",[n("span",[t._v(t._s(i.dealerShortName))]),t._v(" "),n("span",[t._v(t._s(i.promotePrice.slice(0,5))+"万")])]),t._v(" "),n("p",[n("span",[t._v(t._s(i.address))]),t._v(" "),n("span",[t._v("售"+t._s(i.saleRange))])])])}))])]),t._v(" "),t._m(4),t._v(" "),n("CarList",{attrs:{flag:t.showCity,Fn:t.cityChange}})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("header",[i("p",[this._v("可向多个商家咨询最低价，商家及时回复")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("span",[this._v("姓名")]),this._v(" "),i("input",{attrs:{type:"text",placeholder:"输入你的真实中文姓名",maxlength:"4"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("span",[this._v("手机")]),this._v(" "),i("input",{attrs:{type:"tel",placeholder:"输入你的真实手机号码",maxlength:"11"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"quotation"},[i("div",[this._v("询最低价")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("footer",[i("button",[this._v("询最低价")])])}]};var o=n("VU/8")(s,c,!1,function(t){n("/+gH")},"data-v-a57e7bae",null);i.default=o.exports},dnem:function(t,i){}});
//# sourceMappingURL=5.8bb73a2d79d5d43aa7d9.js.map