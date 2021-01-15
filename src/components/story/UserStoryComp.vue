<template>
  <article class="story">
    <div class="story__header">
      <h2>Add User Story</h2>
    </div>
    <div class="form-input">
      <input type="text" name="story" id="story" v-model="story.text" />
      <button class="btn btn--purple" @click="addStory">
        ADD
      </button>
    </div>
    <div class="story__content" v-if="getStories">
      <ul class="story__list">
        <UserStoryListItem
          v-for="story in getStories"
          :key="story.id"
          :story="story.text"
        />
      </ul>
    </div>
    <div class="story__footer">
      <router-link element="button" to="/start" class="btn btn--green"
        >Start Playing</router-link
      >
    </div>
  </article>
</template>

<script>
import UserStoryListComp from "./UserStoryListComp";
export default {
  name: "UserStoryComp",
  components: {
    UserStoryListItem: UserStoryListComp,
  },
  data() {
    return {
      story: {
        id: null,
        text: "",
      },
      stories: [
        {
          id: Date.now(),
          text: "A little test",
        },
      ],
    };
  },
  computed: {
    getStories() {
      return this.stories;
    },
  },

  methods: {
    addStory() {
      if (this.story.text !== "") {
        this.story.id = Date.now();
        this.stories.push({ ...this.story });
        this.story.text = "";
        this.story.id = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.story {
  display: grid;
  grid-template-rows: 10vh 20vh auto 10vh;
  padding: 2rem 2rem;
  min-height: 85vh;
  &__header {
    min-width: 100%;
    h2 {
      margin-left: 1.5rem;
    }
  }
  .form-input {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 20vh;

    input[type="text"] {
      border: none;
      outline: none;
      border-radius: 4px;
      background-color: #dbd8d8;
      padding: 1.3rem;
    }
  }
  &__content {
    min-width: 100%;
    ul {
      list-style-type: none;
      padding: 0;
    }
  }

  &__footer {
    padding: 1rem 0 1rem 0;
  }

  .btn {
    padding: 1rem;
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

    &--purple {
      background: linear-gradient(60deg, #8b67e0, 75%, #472c86);
    }

    &--green {
      background: linear-gradient(60deg, #4da362, 75%, #377245);
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
