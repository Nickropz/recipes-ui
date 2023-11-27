 <!-- The main Vue application -->
<template>
  <v-app>
    <!-- Application-wide app bar -->
    <v-app-bar
      app
      color="primary darken-3"
      dark
    >
      <!-- Navigation bar with application logo and menu buttons -->
      <div class="nav-bar d-flex align-center">
        <!-- Application logo -->
        <v-img
          src="./assets/logo2.png"
          height="55"
          width="55"
          class="mr-3"
        />
        <!-- Application title -->
        <div class="text-h4">From Region to Recipe: A Culinary Map</div>

        <!-- Navigation buttons -->  
        <v-btn 
          color="primary darken-1" 
          elevation="0" 
          class="ml-12"
          @click="$router.push('/home')"
        >
          Home
        </v-btn>

        <v-btn 
          color="primary darken-1" 
          class="ml-6"
          @click="$router.push('/map')"
        >
          Map
        </v-btn>

        <v-btn 
          color="primary darken-1" 
          class="ml-6"
          @click="$router.push('/about')"
        >
          About
        </v-btn>

        <v-btn 
          color="primary darken-1" 
          class="ml-6"
          @click="$router.push('/reviews')"
        >
          Reviews
        </v-btn>

      </div>

      <!-- Spacer to push the buttons to the right -->
      <v-spacer />

      <!-- Button to open the Feedback modal -->
      <v-btn @click="openFeedbackModal">
        <v-icon>mdi-message-outline</v-icon>&nbsp;Feedback
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    
    <!-- Feedback Modal -->
    <v-dialog v-model="feedbackModal" max-width="400">
      <feedback-page 
        :feedback-modal="feedbackModal"
        @close="feedbackModal = false"
      />
    </v-dialog>

    <!-- Notifications component for displaying notifications at the bottom center -->
    <notifications group="notify" position="bottom center" />
  </v-app>
</template>

<script>
// Import the FeedbackPage component
import FeedbackPage from './components/FeedbackPage';

export default {
  name: 'App',

  components: { 
    FeedbackPage 
  },

  data: () => ({
    feedbackModal: false, //Initially hidden
  }),

  // Methods for handling feedback modal
  methods:{
    openFeedbackModal(){
      this.feedbackModal = true; //Set the modal to open
    },
  },
};  
     
</script>

<style scoped lang="scss">
  .nav-bar {
    .v-btn {
      border: 1px solid silver !important;
    }
  }
</style>