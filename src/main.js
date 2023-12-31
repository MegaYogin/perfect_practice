import 'daisyui/dist/full.css'
import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import Home from './components/Home.vue';
import Asanas from './components/Asanas.vue';
import Vinyasas from './components/Vinyasa.vue';

// Создайте экземпляр маршрутизатора
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', // Это главная страница
      component: Home,
    },
    {
      path: '/asanas',
      component: Asanas,
    },
    {
      path: '/vinyasa',
      component: Vinyasas,
    },
  ],
});

const app = createApp(App);

const pinia = createPinia(); 
app.use(pinia);
app.use(router);

app.mount('#app');
