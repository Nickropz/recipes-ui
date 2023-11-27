<template>
    <v-card color="teal darken-4" height="calc(100vh - 90px)">
      <v-card-title class="text-h2 justify-center">
        <v-img
          src="../assets/logo3.png"
          height="200"
          width="200"
          class="ma-3"
          style="position: absolute; left: 0;"
        />
        <v-spacer />
        About Us
        <v-spacer />
        <div class="text-subtitle-1 d-block">
          <p>Authors:</p>
          <p>Nick Windsor</p>
          <p>Christian Kirk</p>
        </div>
      </v-card-title>
  
      <v-card-text style="padding-left: 30vw; padding-right: 30vw;">
        <v-card class="main-content py-6 text-center">
          <p>Group 7 believes that food is not just sustenance; it’s an expression of the mind, a universally</p>
          <p>appreciated art form. Our collective passion for diverse cuisines and a desire to make culinary</p>
          <p>exploration more accessible led us to create a unique web application for our Capstone project.</p>
          <br />
          <p>With “From Region to Recipe: A Culinary Map”, our goal is to simplify the discovery of new cuisines and</p>
          <p>provide an interactive map experience showcasing their geographical origins. Many extraordinary</p>
          <p>cuisines remain hidden from the average person, and our application aims to unveil the rich diversity of </p>
          <p>global flavors.</p>
          <br />
          <p>Embark on a journey with us as we invite you to unlock the best foods cultures around the world have to</p>
          <p>offer. From the comfort of your screen, explore, savor, and appreciate the world’s culinary diversity. </p>
        </v-card>
  
        <!-- Button to Open Contact Us Modal -->
        <v-spacer />
        <v-btn @click="openContactModal" color="grey darken-4" dark class="mb-4 mt-15">
            Contact Us
        </v-btn>
      </v-card-text>
  
        <v-spacer />
      
      <!-- Contact Us Modal-->
      <v-dialog v-model="contactModal" max-width="500">
        <v-card>
          <v-card-title class="text-h2 justify-center">
            Contact Us
          </v-card-title>
  
          <v-card-text>
            <p>Nick Windsor: nickwindsor@example.com</p>
            <p>Christian Kirk: christiankirk@example.com</p>
          </v-card-text>
  
          <v-card-actions>
            <v-btn @click="closeContactModal">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contactModal: false,
      };
    },
    methods: {
      openContactModal() {
        this.contactModal = true;
      },
      closeContactModal() {
        this.contactModal = false;
      },
    },
  };
  </script>
  
  <style scoped>
    .main-content {
      background-color: #cccbcb;
      color: black;
    }
  </style>
  