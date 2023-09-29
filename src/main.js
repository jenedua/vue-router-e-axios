import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './routes'

// Configure o Axios para usar uma base URL, se necessário
//axios.defaults.baseURL = 'http://127.0.0.1:3000'; // Substitua pela sua URL de API
//axios.defaults.baseURL = 'http://localhost:3000'; // Substitua pela sua URL de API
// Faça o Axios estar disponível globalmente no Vue
//App.prototype.$http = axios;

createApp(App).use(router).mount('#app')

