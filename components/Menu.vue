<template>
  <span>
  <i @click="showMenu" class="l menu material-icons">menu</i>
  <i @click="showMenu" class="m menu material-icons">menu</i>
  <nuxt-link to="/" v-if="path !== '/'">
    <i class="l back material-icons">arrow_back</i>
    <i class="m back material-icons">arrow_back</i>
  </nuxt-link>
  </span>
</template>

<script>
  export default {
    data () {
      return {
        path: this.$router.app.$route.path
      }
    },
    methods: {
      showMenu () {
        alert('menu')
      }
    }
  }
</script>

<style>

</style>
