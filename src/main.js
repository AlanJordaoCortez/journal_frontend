import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //index.js is automatically imported

createApp(App).use(router).mount('#app')