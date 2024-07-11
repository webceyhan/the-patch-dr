<script setup lang="ts">
import Icon from "./Icon.vue";
</script>

<template>
  <div class="scroll-to-top affix" data-spy="affix" data-offset-top="200">
    <a href="#page-top">
      <Icon name="arrow-up" />
    </a>
  </div>
</template>

<style scoped>
.scroll-to-top {
  background: #333;
  position: fixed;
  bottom: 15px;
  right: 15px;
  text-align: center;
  border-radius: 4px;
  z-index: 9999;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.scroll-to-top:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
.scroll-to-top a {
  color: #fff;
  display: block;
  line-height: 40px;
  width: 40px;
  height: 40px;
}
</style>
