<script setup lang="ts">
/**
 * Types
 */
interface Props {
  value: number;
}

defineProps<Props>();
</script>

<template>
  <progress class="progress" :value max="100"></progress>
</template>
