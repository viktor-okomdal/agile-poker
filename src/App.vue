<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Imbue:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

h1 {
  font-family: "Imbue", serif;
  letter-spacing: 0.5rem;
  font-size: 3rem;
  text-transform: uppercase;
}
p,
button {
  font-family: "Raleway", sans-serif;
}
button {
  outline: none;
  background: transparent;
  border: 0.2rem solid black;
  border-radius: 0.6rem;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    background-color: pink;
  }
  &:active {
    background-color: black;
    color: white;
  }
}
</style>
