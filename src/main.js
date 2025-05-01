import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import observeVisibility from './directives/observeVisibility'

const app = createApp(App)
app.directive('observe-visibility', observeVisibility)
createApp(App).mount('#app')


