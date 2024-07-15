<script setup lang="ts">
defineProps<{
  value: number;
}>();
</script>

<template>
  <progress class="progress" :value max="100"></progress>
</template>
