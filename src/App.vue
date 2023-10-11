<script setup>
import Cookies from "js-cookie";
import { onMounted, provide, ref } from "vue";

let timeout;
const component = ref("screen");

provide("url", "http://127.0.0.1:8000/");

window.addEventListener("load", () => {
  timeout = setTimeout(() => {
    const user = Cookies.get("userId");
    if (!user) {
      component.value = "auth";
    } else {
      component.value = "home";
    }
  }, 3000);
});
</script>

<template>
  <main class="bg-dark py-1">
    <div class="content main bg">
      <component
        :is="component"
        @registered="component = 'home'"
        class="comp"
      ></component>
    </div>
  </main>
</template>

<style lang="sass" scoped>
@import './assets/main'
@import 'animate.css'

main
  color: $primary

  width: 100%
  height: 100vh
  display: grid
  place-items: center
  .main
    position: relative
    width: 350px
    height: 100%
    box-shadow: 0 0 10px white
    overflow: hidden
    

  .comp
    animation: slideInRight .5s ease

@media screen and (max-width: 464px)
  .main
    width: 100% !important
</style>
