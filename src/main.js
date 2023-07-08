import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app');


if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js')
    //.catch(err=>console.error)
}