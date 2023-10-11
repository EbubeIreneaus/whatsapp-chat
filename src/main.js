import './assets/main.sass'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Header from './components/sub/Header.vue'
import screen from './components/sub/screen.vue'
import Auth from './components/Auth.vue'

const app = createApp(App)
app.component('home', Home)
app.component('header_', Header)
app.component('auth', Auth)
app.component('screen', screen)
app.mount('#app')
