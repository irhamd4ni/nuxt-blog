<template>
  <main>
    <header>
      <h1 class="title">
        Error {{ error.statusCode }}.
      </h1>
      <div class="divider"></div>
      <nuxt-link to="/" v-if="error.statusCode === 404">
        Go back.
      </nuxt-link>
    </header>
  </main>
</template>
<script>
export default {
  props: ['error']
}
</script>
