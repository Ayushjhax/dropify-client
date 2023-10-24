import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import AuthPlugin from '@/plugins/auth.plugin'
import './index.css'

const app = createApp(App)

// Registering Pinia plugin
app.use(createPinia())

// Registering Router plugin
app.use(router)

// Authentication plugin
app.use(AuthPlugin)

app.mount('#app')
