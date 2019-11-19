<template>
  <v-dialog v-model="editDialog" width="450px" persistent>
    <v-btn fab accent slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title class="headline">
              Edit Meetup
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                label="Title"
                v-model="editedTitle"
                required></v-text-field>
              <v-textarea
                v-model="editedDescription"
                required
                counter>
                <div slot="label">Description</div>
              </v-textarea>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex row wrap>
            <v-card-actions>
              <v-btn class="blue--text darken-1" flat @click="editDialog = false">Close</v-btn>
              <v-btn class="blue--text darken-1" flat @click="onSaveChanges">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data: function () {
    return {
      editDialog: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description
    }
  },
  methods: {
    onSaveChanges () {
      if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
        return
      }
      this.editDialog = false
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
    }
  }
}
</script>
