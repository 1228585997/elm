import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false
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
	 Tab, Tabs
} from 'vant';
Vue.use(Tab).use(Tabs);
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(Cell).use(CellGroup);
Vue.use(Rate);
Vue.use(Tag)
Vue.use(Icon)
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Button)
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
