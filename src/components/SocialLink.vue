<script setup lang="ts">
defineProps<{
  label?: string;
  href: string;
  imageUri?: string;
}>();
</script>

<template>
  <a :href target="_blank" class="group inline-flex items-center gap-4">
    <img
      :src="imageUri"
      class="size-14 grayscale group-hover:grayscale-0 transition-all duration-300"
    />

    <span
      v-if="label"
      class="text-3xl md:text-4xl text-base-100 group-hover:text-primary transition-all duration-300"
    >
      {{ label }}
    </span>
  </a>
</template>
