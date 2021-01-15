<template>
  <div class="home">
    <Header class="header"/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

export default {
  components: {Header}
};
</script>

<style scoped>
  .home{
    display: grid;
    place-items: center;
  }
</style>
