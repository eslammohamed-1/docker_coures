import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'

if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister()
    }
  })

  if ('caches' in window) {
    caches.keys().then((keys) => {
      for (const key of keys) {
        caches.delete(key)
      }
    })
  }
}

createApp(App).use(router).mount('#app')
