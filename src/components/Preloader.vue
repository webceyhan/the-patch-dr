<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const $ = (window as any).$;

  $(".preloader").fadeOut(1000);
});
</script>

<template>
  <div class="preloader">
    <div class="spinner">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.preloader,
.preloader > .spinner {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.preloader {
  position: fixed;
  background-color: #151515;
  z-index: 9999999;
}
.preloader > .spinner {
  position: absolute;
  width: 100%;
  height: 15px;
  margin: auto;
  text-align: center;
}
.preloader > .spinner > span {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
  background: gray;
  -webkit-animation: spinner-color 1.2s infinite ease-in-out;
  -o-animation: spinner-color 1.2s infinite ease-in-out;
  animation: spinner-color 1.2s infinite ease-in-out;
}
.preloader > .spinner > span:first-child {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.preloader > .spinner > span:last-child {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-webkit-keyframes spinner-color {
  0% {
    background: #555;
  }
  40% {
    background: #fff;
  }
  100%,
  80% {
    background: #555;
  }
}
@keyframes spinner-color {
  0% {
    background: #555;
  }
  40% {
    background: #fff;
  }
  100%,
  80% {
    background: #555;
  }
}
</style>
