<script setup>
import { ref } from "vue";

const component = ref("home");
</script>

<template>
  <main class="bg-dark">
    <div class="container main bg">
      <component :is="component"></component>
    </div>
  </main>
</template>

<style lang="sass" scoped>
@import './assets/main'
main
  
  width: 100%
  height: 100vh
  display: grid
  place-items: center
  .main
    width: 350px
    height: 90vh
    box-shadow: 0 0 10px white
</style>
