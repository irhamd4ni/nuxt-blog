<template>
  <main>
    <header>
      <h1>{{title}}.</h1>
      <div class="divider"></div>
    </header>
    <section>
      {{ article }}
    </section>
    <main-menu></main-menu>
    <foooter></foooter>
  </main>
</template>

<script>
  import axios from '~plugins/axios'
  import MainMenu from '~components/Menu'
  import Foooter from '~components/Footer'
  export default {
    name: 'post',
    components: {
      MainMenu,
      Foooter
    },
    async asyncData ({params, error}) {
      console.log(params)
      let {data} = await axios
        .get('https://jsonplaceholder.typicode.com/posts/' + params.id)
      return {
        title: data.title,
        article: data.body
      }
    },
    data () {
      return {
        article: 'loading.'
      }
    }
  }
</script>
