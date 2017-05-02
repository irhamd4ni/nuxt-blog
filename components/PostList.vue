<template>
  <div>
    <div v-for="post in posts" :id="post.id">
      <nuxt-link class="no-underline" :to="{ name:'post-id', path: 'post/'+post.id, params: { id: post.id } }">
        <h4>{{ post.title }}</h4>
        <div class="m preview-box">
          <img class="preview-item" src="http://placehold.it/140x100">
          <p class="preview-item">{{ trunc(post.article) }}</p>
        </div>
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

  .preview-box {
    display: flex;
    flex-flow: row;
  }

  .preview-item {
    margin: 1rem;
    align-self: center;
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

  @media only screen and (max-width: 1024px) {
    .preview-box {
      display: flex;
      flex-flow: column;
    }

    .preview-item {
      margin: 0;
      margin-top: 1rem;
      align-self: center;
    }
  }


</style>
