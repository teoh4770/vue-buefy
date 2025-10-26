import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

// Import Buefy Full Bundle
import Buefy from 'buefy'
import 'buefy/dist/css/buefy.css'

// Or individual components as Vue plugins
// import { Table, Input } from 'buefy'
// import 'buefy/dist/css/buefy.css'

const app = createApp(App)

// Install plugins here
// Register Buefy plugin
app.use(Buefy);

// Register Table and Input Buefy component
// app.use(Table)
// app.use(Input)

app.mount('#app')
