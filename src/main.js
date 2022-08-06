import Vue from 'vue'
import App from './App.vue'
import { Button, Container, Aside, Main, Menu, MenuItem, MenuItemGroup, Submenu } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 

import router from '../router'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
