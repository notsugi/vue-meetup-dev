<template>
  <v-app>
    <v-toolbar>
      
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
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
      sideNav: false
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
