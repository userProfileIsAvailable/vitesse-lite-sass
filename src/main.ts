// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import ThemeProvider from './ThemeProvider.vue'
import '~/sass/_reset.scss'
const app = createApp(ThemeProvider)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)
app.mount('#app')
