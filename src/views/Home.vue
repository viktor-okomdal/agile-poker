<template>
  <div class="home">
    <Header class="header" />
    <div class="content">
      <p>I am a</p>
      <router-link to="/add/story">
        <button>Product Owner</button>
      </router-link>
      <router-link to="/Enter">
        <button>Team Member</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
  .home{
    display: grid;
    place-items: center;
    grid-template-rows: 20% 60%;
    height: 100vh;
  }
  .content{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  button{
    margin-top: 1rem;
    width: 15rem;
  }
  p{
    font-size: 2rem;
  }
</style>
