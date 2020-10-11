import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted';
import VueDraggableResizable from 'vue-draggable-resizable'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faImage, faFont, faPlus, faCheck, faArrowLeft, faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Toasted, { duration: 6000, singleton: true, position: 'bottom-center' });

library.add(faImage, faFont, faPlus, faCheck, faArrowLeft, faTrashAlt, faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.config.productionTip = false

import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import 'normalize.css/normalize.css'
import store from './store'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
