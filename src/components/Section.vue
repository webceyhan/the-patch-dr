<script setup lang="ts">
defineProps<{
  overlaySrc?: string;
  centered?: boolean;
}>();
</script>

<template>
  <section
    :class="[
      'hero min-h-screen px-4 py-10 md:py-20 spy',
      { 'text-base-100 bg-cover bg-center bg-fixed bg-no-repeat': overlaySrc },
    ]"
    :style="{ backgroundImage: overlaySrc ? `url('${overlaySrc}')` : undefined }"
  >
    <!-- overlay -->
    <slot name="overlay" />

    <div :class="['hero-content text-lg', { 'text-center': centered }]">
      <div :class="['flex flex-col gap-10', { 'items-center': centered }]">
        <!-- title -->
        <h1 v-if="$slots.title" class="text-3xl md:text-5xl font-bold">
          <slot name="title" />
        </h1>

        <!-- content -->
        <slot />
      </div>
    </div>
  </section>
</template>
