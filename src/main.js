import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//import Calendar from 'primevue/calendar';


import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
//import "primevue/resources/themes/lara-light-indigo/theme.css";
const app = createApp(App);
app.component('VueDatePicker', VueDatePicker);
//app.component('Calendar', Calendar);
app.use(router).mount('#app');

//createApp(App).use(router).mount('#app')





