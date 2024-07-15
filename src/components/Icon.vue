<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <svg class="fill-current" width="16" height="16">
    <use :xlink:href="`./icons.svg#${name}`" />
  </svg>
</template>

