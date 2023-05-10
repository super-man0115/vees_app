import { createApp } from 'vue'
import App from './App.vue'
import router from '@/vue-router/index'
import store from '@/store/index'
import vuetify from './plugins/vuetify'

import "./firebase/firebase";

createApp(App).use(router).use(store).use(vuetify).mount('#app')
