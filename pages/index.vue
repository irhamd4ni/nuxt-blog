<template>
  <main>
    <header>
      <h1 class="l">Today's.</h1>
      <h1 class="m main-title">Today's.</h1>
      <div class="divider"></div>
      <p>Read casul latin. Today.</p>
    </header>
    <section>
      <post-list :posts="posts"></post-list>
    </section>
    <main-menu></main-menu>
  </main>
</template>

<script>
import axios from '~plugins/axios'
import PostList from '~components/PostList'
import MainMenu from '~components/Menu'

export default {
  async asyncData () {
    let posts = await axios
      .get('https://jsonplaceholder.typicode.com/posts')
    posts = posts.data.map((p) => {
      return {
        id: p.id,
        article: p.body,
        title: p.title
      }
    })
    return {
      posts
    }
  },
  components: {
    PostList,
    MainMenu
  },
  head () {
    return {
      title: 'c00l news'
    }
  }
}
</script>

<style lang="css" scoped>
  .main-title {
    font-size: 48px;
    line-height: 50px;
  }
</style>
