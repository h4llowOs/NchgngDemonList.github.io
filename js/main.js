import { reactive, createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes.js';

export const store = reactive({
    dark: JSON.parse(localStorage.getItem('dark')) || false,
    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
    },
});

const app = createApp({
    data: () => ({ store }),
});

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

app.use(router);
app.mount('#app');
