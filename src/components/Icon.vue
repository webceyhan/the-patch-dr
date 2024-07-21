<script setup lang="ts">
/**
 * Types
 */
interface Props {
  name: string;
}

defineProps<Props>();
</script>

<template>
  <svg class="fill-current" width="16" height="16">
    <use :xlink:href="`./icons.svg#${name}`" />
  </svg>
</template>
