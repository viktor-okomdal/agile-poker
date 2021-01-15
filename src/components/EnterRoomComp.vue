<template>
  <div>
    <h1>This is Enter Room</h1>
    <form @submit.prevent="send" ref="roomCode">
      <input type="text" name="code" />
      <button>Enter</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    send() {
      console.log(this.$refs.roomCode.code.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>