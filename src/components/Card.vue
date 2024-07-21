<script setup lang="ts">
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
    class="card overflow-hidden rounded-badge shadow-lg"
    :class="{ 'image-full': flipped }"
  >
    <!-- overlay -->
    <figure v-if="overlaySrc">
      <img
        class="object-cover w-full h-auto"
        :src="`.${overlaySrc}`"
        :alt="title"
        loading="lazy"
      />
    </figure>

    <div
      :class="[
        'card-body p-8',
        {
          'bg-black/85 opacity-0 hover:opacity-100 transition-all duration-500': flipped,
        },
      ]"
    >
      <!-- title -->
      <h2 v-if="title" class="card-title uppercase">
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
