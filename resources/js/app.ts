import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import { initializeTheme } from './composables/useAppearance';

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'; // ✅ PrimeVue Aura theme
import 'primeicons/primeicons.css'; // ✅ PrimeIcons for icons

// ✅ Your used components
import FileUpload from 'primevue/fileupload';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const vueApp = createApp({ render: () => h(App, props) });

        vueApp.use(plugin);
        vueApp.use(ZiggyVue);
        vueApp.use(PrimeVue, {
            theme: {
                preset: Aura,
            },
        });

        vueApp.component('FileUpload', FileUpload);
        vueApp.component('DataTable', DataTable);
        vueApp.component('Column', Column);

        vueApp.mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
