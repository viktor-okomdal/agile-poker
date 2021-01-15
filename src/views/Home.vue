<template>
  <div class="home">
    <Header class="header" />
    <EnterRoom />
  </div>
</template>

<script>
import EnterRoom from "@/components/EnterRoom.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    EnterRoom,
    Header,
  },
};
</script>

<style scoped>
.home {
  display: grid;
  place-items: center;
}
</style>
