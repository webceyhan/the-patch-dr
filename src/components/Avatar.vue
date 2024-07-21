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

const { src } = defineProps<Props>();

const url = useAsset(src);
</script>

<template>
  <div class="avatar w-20 cursor-pointer">
    <div
      :class="[
        'ring-offset-base-100 rounded-full ring ring-offset-2',
        { 'ring-primary animate-pulse': active },
      ]"
    >
      <img :src="url" :alt />
    </div>
  </div>
</template>
