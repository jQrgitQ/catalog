import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // ← IMPORTANTE: Agregar esta línea

// PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

// Componentes que NECESITARÁS para un catálogo
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Dropdown from 'primevue/dropdown'
import Tag from 'primevue/tag'

// Crear la aplicación
const app = createApp(App)

// Usar plugins
app.use(router)        // ← PRIMERO el router
app.use(PrimeVue)      // ← LUEGO PrimeVue
app.use(ToastService)  // ← LUEGO ToastService

// Registrar componentes globalmente
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Card', Card)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Dialog', Dialog)
app.component('Toast', Toast)
app.component('Dropdown', Dropdown)
app.component('Tag', Tag)

// Montar la aplicación
app.mount('#app')