<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <p class="display-1 font-weight-light secondary--text">Create a new Meetup</p>
      </v-flex>
    </v-layout>
    <v-form ref="createForm" @submit.prevent="onCreateMeetup" lazy-validation>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
            name="title"
            label="Title"
            id="title"
            v-model="title"
            :rules="[v => !!v ? true : 'Title is required.']"
            hint="Meetup title"
            required></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
            name="location"
            label="Location"
            id="location"
            v-model="location"
            :rules="[v => !!v ? true : 'Location is required.']"
            required></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3>
          <v-btn raised class="primary" @click="onPickFile">Upload image</v-btn>
          <input
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/*"
            @change="onFilePicked">
        </v-flex>
        <v-flex xs12 sm6 offset-sm3>
          <v-img :src="imageUrl"></v-img>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 class="mt-2 mb-4">
          <v-textarea
            name="description"
            id="description"
            v-model="description"
            :rules="[v => !!v ? true : 'Required.']"
            required
            counter>
            <div slot="label">Description</div>
          </v-textarea>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <p class="display-1 font-weight-light secondary--text">Choose a Date & Time</p>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-date-picker v-model="date" full-width></v-date-picker>
          <!-- <p>{{ date }}</p> -->
        </v-flex>
      </v-layout>
      <v-layout row class="mt-2 mb-4">
        <v-flex xs12 sm6 offset-sm3>
          <v-time-picker v-model="time" format="24hr" full-width></v-time-picker>
          <!-- <p>{{ time }}</p> -->
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn type="submit" class="primary" :disabled="!formIsValid">Create Meetup</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-btn outline class="success--text" @click="resetForm">Clear Form</v-btn>
        </v-flex>
        <!-- {{ submittableDateTime }} -->
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '',
    location: '',
    imageUrl: '',
    description: '',
    date: new Date().toLocaleString('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit'}).split('/').reverse().join('-'),
    time: new Date().toTimeString().substr(0, 5),
    image: null
  }),
  computed: {
    formIsValid () {
      return !!this.title && !!this.location && !!this.imageUrl && !!this.description
    },
    submittableDateTime () {
      const date = new Date()
      // set date
      let year = this.date.match(/^(\d+)/)[1]
      let month = this.date.match(/-(\d+)-/)[1]
      let day = this.date.match(/(\d+)$/)[1]
      date.setFullYear(year)
      date.setMonth(month - 1)
      date.setDate(day)
      // set time
      let hour = this.time.match(/^(\d+)/)[1]
      let minutes = this.time.match(/:(\d+)/)[1]
      date.setHours(hour)
      date.setMinutes(minutes)
      date.setSeconds(0)
      // return Date object
      console.log(date)
      return date
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      if (!this.image) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        image: this.image,
        description: this.description,
        date: this.submittableDateTime
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    },
    resetForm () {
      this.$refs.createForm.reset()
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>
