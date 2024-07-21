<script setup lang="ts">
import { useAsset } from "../composables/useAsset";

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
      <img :src="useAsset(src)" :alt />
    </div>
  </div>
</template>
