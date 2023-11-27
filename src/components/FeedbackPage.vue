<template>
 <v-dialog :value="feedbackModal" max-width="400">
  <v-card>
    <v-card-title>Feedback Form</v-card-title>
    <v-card-text>
      <!-- Star Rating -->
      <div @mouseleave="setStarDefaults">
        <span>Rate your experience: </span>
        <v-icon 
            v-for="star in stars" 
            :key="star.value" 
            :color="star.color"
            @click="rating = star.value"
            @mouseover="setStarColors(star.value)"
        >
          <!-- {{ star <= rating ? 'star' : 'star_outline' }} -->
          mdi-star
        </v-icon>
      </div>

      <!-- Comment Section -->
      <v-textarea v-model="comment" label="Your Comment" rows="4"></v-textarea>
    </v-card-text>
    <v-card-actions>
        <v-spacer />
        <v-btn color="grey" @click="$emit('close')">Cancel</v-btn>
      <v-btn @click="submitFeedback" color="primary">Submit</v-btn>
    </v-card-actions>
  </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    feedbackModal: Boolean
  },

  data() {
    return {
      rating: null, // Initial star rating
      comment: "", // Initial comment
      stars: [
        { value: 1, color: 'grey' },
        { value: 2, color: 'grey' },
        { value: 3, color: 'grey' },
        { value: 4, color: 'grey' },
        { value: 5, color: 'grey' }
      ]
    }
  },
  methods: {
    setStarColors (index) {
        this.stars.forEach(star => {
            if (star.value <= index) {
                star.color = 'yellow'
            } else {
                star.color = 'grey'
            }
        })
    },

    setStarDefaults () {
        if (this.rating) { return }
        this.stars.forEach(star => {
            star.color="grey"
        })
    },

    submitFeedback() {
      // Handle the submission of feedback here
      console.log("Rating: " + this.rating);
      console.log("Comment: " + this.comment);
      this.$emit('close')
      this.$notify({
        group: 'notify',
        title: 'Success!',
        text: 'Successfully submitted feedback.',
        position: 'bottom center'
    })
    }
  }
};
</script>
