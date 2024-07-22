<script setup lang="ts">
import Image from "./Image.vue";

/**
 * Types
 */
interface Props {
  title?: string;
  overlaySrc?: string;
  flipped?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    :data-theme="flipped ? 'dark' : 'light'"
    :class="[
      'card overflow-hidden rounded-badge shadow-md shadow-current',
      { 'image-full': flipped },
    ]"
  >
    <!-- overlay -->
    <figure v-if="overlaySrc">
      <Image class="object-cover w-full h-auto" :src="overlaySrc" :alt="title" lazy />
    </figure>

    <div
      :class="[
        'card-body p-8',
        {
          'bg-base-300/90 opacity-0 hover:opacity-100 transition-all duration-500': flipped,
        },
      ]"
    >
      <!-- title -->
      <h2 v-if="title" class="card-title uppercase font-extrabold lg:tracking-widest">
        {{ title }}
      </h2>

      <!-- content -->
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card.image-full:before {
  opacity: 0;
}
</style>
