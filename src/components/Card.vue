<script setup lang="ts">
defineProps<{
  title?: string;
  overlaySrc?: string;
  centered?: boolean;
}>();
</script>

<template>
  <div class="card overflow-hidden shadow-lg">
    <!-- overlay -->
    <figure v-if="overlaySrc">
      <img :src="overlaySrc" :alt="title" loading="lazy" />
    </figure>

    <div class="card-body p-8">
      <!-- title -->
      <h2 v-if="title" class="card-title uppercase">
        {{ title }}
      </h2>

      <!-- content -->
      <slot />
    </div>
  </div>
</template>
