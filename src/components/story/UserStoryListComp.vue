<template>
  <li>{{ story }} <button class="btn btn--del">DEL</button></li>
</template>

<script>
export default {
  name: "userStoryListComp",
  props: {
    story: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  font-weight: bold;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  &:nth-child(even) {
    background-color: #e4e4e4;
    color: #222;
  }

  .btn {
    padding: 0.5rem;
    border: none;
    outline: none;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    display: block;
    text-align: center;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    &--del {
      background: linear-gradient(60deg, #e45f70, 75%, #af2c3e);
      border-radius: 50%;
      font-size: 10px;
    }
  }
}
</style>
