<script setup lang="ts">
import Image from "./Image.vue";

/**
 * Types
 */
interface Props {
  src: string;
  alt: string;
  active?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="avatar w-20 cursor-pointer">
    <div
      :class="[
        'ring-offset-base-100 rounded-full ring ring-offset-2',
        { 'ring-primary animate-pulse': active },
      ]"
    >
      <Image :src :alt />
    </div>
  </div>
</template>
