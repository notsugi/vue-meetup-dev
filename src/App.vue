<template>
  <v-app>
    <!-- menubar -->
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetUp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in MenuItems" :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- navigation -->
    <v-navigation-drawer fixed v-model="sideNav">
      <v-list dense>
        <v-list-tile v-for="item in MenuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- content -->
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      sideNav: false,
      MenuItems: [
        { icon: 'supervisor_account', title: 'View Meetups' },
        { icon: 'room', title: 'Organize Meetup' },
        { icon: 'person', title: 'Profile' },
        { icon: 'face', title: 'Sign up' },
        { icon: 'lock_open', title: 'Sign in' }
      ]
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
