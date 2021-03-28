import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)
app.use(Router).mount('#app')