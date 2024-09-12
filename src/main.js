import { createApp } from 'vue';
import App from './App.vue';

// Import css
import './assets/css/app.css';

// Import router    
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
