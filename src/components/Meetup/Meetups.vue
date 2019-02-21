<template>
  <!-- flex layout -->
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <!-- card component -->
        <v-card class="info mb-2" v-for="meetup in meetups" :key="meetup.id">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-img
                  :src="meetup.imageUrl"
                  height="130px"
                ></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                    <div>
                      <div class="headline white--text">{{ meetup.title }}</div>
                      <div>{{ meetup.date | formatDate }}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat :to="`/meetups/${meetup.id}`">
                      <v-icon left>arrow_forward</v-icon>
                      View Meetup
                    </v-btn>
                  </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <!-- end card component -->
      </v-flex>
    </v-layout>
  </v-container>
  <!-- end flex layout -->
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>
