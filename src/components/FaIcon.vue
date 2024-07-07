<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <svg class="icon">
    <use :xlink:href="`/fa-icons.svg#${name}`" />
  </svg>
</template>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}
</style>
