import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './index.css';
import appRouter from './router/app-router';

const app = createApp(App);

app.use(appRouter);
app.mount('#app');
