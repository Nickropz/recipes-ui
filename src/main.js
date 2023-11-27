// Import Vue and VueRouter libraries
import Vue from "vue";
import VueRouter from 'vue-router'

// Import the main App component
import App from "./App.vue";

// Import Vuetify for styling
import vuetify from './plugins/vuetify'

// Import the vue-notification plugin for notifications
import Notifications from 'vue-notification'

// Import components for routing
import HomePage from '../src/components/HomePage'
import RecipeMap from '../src/components/RecipeMap'
import AboutPage from '../src/components/AboutPage'
import ReviewsPage from '../src/components/ReviewsPage'
import FeedbackPage from '../src/components/FeedbackPage'

Vue.config.productionTip = false;

// Use VueRouter and vue-notification plugins
Vue.use(VueRouter)
Vue.use(Notifications)

// Define the routes for the application
const routes = [
  { path: '/home', component: HomePage },
  { path: '/map', component: RecipeMap },
  { path: '/reviews', component: ReviewsPage },
  { path: '/about', component: AboutPage},
  { path: '/feedback', component: FeedbackPage},
  { path: '*', redirect: '/home' }
]

// Create a new VueRouter instance with the defined routes
const router = new VueRouter({
  routes
})

// Create a new Vue instance
new Vue({
  vuetify,
  router, // Attach the router instance to the Vue instance
  render: h => h(App)
}).$mount("#app");