<template>
  <div>
    <div v-for="post in posts" :id="post.id">
      <nuxt-link class="no-underline" :to="{ name:'post-id', path: 'post/'+post.id, params: { id: post.id } }">
        <h4>{{ post.title }}</h4>
      <table>
        <tbody>
        <tr>
          <td>
            <img class="preview img" src="http://placehold.it/140x100">
          </td>
          <td>
            <p class="preview">{{ trunc(post.article) }}</p>
          </td>
        </tr>
        </tbody>
      </table>
      </nuxt-link>
      <div class="divider"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['posts'],
    data () {
      return {}
    },
    methods: {
      trunc (text) {
        return text.slice(0, 140) + '...'
      }
    }
  }
</script>

<style lang="css">
  .no-underline {
    text-decoration: none;
  }

  @media only screen and (min-width: 1024px) {
    .preview-title {
      opacity: 0.77;
      transition: all 100ms ease-in-out;
    }

    .preview-title:hover {
      opacity: 1;
      transform: scale(1.111)
    }
  }
</style>
