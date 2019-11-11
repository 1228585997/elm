import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
Vue.config.productionTip = false
import Mint from 'mint-ui';
Vue.use(Mint);
import {
	Button,
	Swipe,
	SwipeItem,
	Tabbar,
	TabbarItem,
	Icon,
	Tag,
	Rate,
	Cell,
	CellGroup,
	 IndexBar, 
	 IndexAnchor,
	 Tab, Tabs,
	 DropdownMenu,
	 DropdownItem,
	 TreeSelect,
	 PullRefresh
} from 'vant';
Vue.use(PullRefresh)
Vue.use(TreeSelect)
Vue.use(Tab).use(Tabs);
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(Cell).use(CellGroup);
Vue.use(Rate);
Vue.use(Tag)
Vue.use(Icon)
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Button)
Vue.use(DropdownMenu).use(DropdownItem);
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
