<script setup lang="ts">
import { useAsset } from "../composables/useAsset";

/**
 * Types
 */
interface Props {
  src: string;
  alt?: string;
  lazy?: boolean;
}

defineProps<Props>();
</script>

<template>
  <img :src="useAsset(src)" :alt :loading="lazy ? 'lazy' : 'eager'" />
</template>
