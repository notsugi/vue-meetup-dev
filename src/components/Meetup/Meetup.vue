<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <div class="headline primary--text">{{ meetup.title }}</div>
          </v-card-title>
          <v-img
            :src="meetup.imageUrl"
            height="400px"
          ></v-img>
          <v-card-text>
            <div class="info--text">{{ meetup.date }} @ Where it takes place</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quae eaque minima. Assumenda impedit tenetur accusantium molestiae, commodi tempore sunt consectetur sed ipsam, minus repellendus amet nobis voluptatem eos! Corporis sit repellat illum soluta iste distinctio molestias praesentium doloremque repudiandae!</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['meetupid'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.meetupid)
    }
  }
}
</script>
