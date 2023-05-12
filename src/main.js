import { createApp } from 'vue'
import App from './App.vue'
import router from '@/vue-router/index'
import store from '@/store/index'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag-next';

import "./firebase/firebase";

createApp(App).use(router).use(store).use(vuetify).use(VueGtag, {property: {id: 'G-QEX69YLT0T'}, router}).mount('#app')
