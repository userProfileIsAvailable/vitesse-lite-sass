// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { VueQueryPlugin } from 'vue-query'
import App from './App.vue'
import '~/sass/_reset.scss'
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
