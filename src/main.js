import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const vm = createApp(App).use(router)
vm.mount('#app')
