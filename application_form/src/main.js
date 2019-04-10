/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {Tabs, Tab} from 'vue-tabs-component';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

library.add(faCoffee)
library.add(faCar)
library.add(faList)
library.add(faHome)
library.add(faBell)
library.add(faCog)
library.add(faSignInAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false

Vue.prototype.$http ='http://192.168.1.135/SUC_Student_Union_System/public';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
