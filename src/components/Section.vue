<script setup lang="ts">
import { useAsset } from "../composables/useAsset";

/**
 * Types
 */
interface Props {
  overlaySrc?: string;
  centered?: boolean;
}

const props = defineProps<Props>();

const overlayUrl = useAsset(props.overlaySrc!);
</script>

<template>
  <section
    :class="[
      'hero min-h-screen px-4 py-10 md:py-20 spy',
      {
        'bg-base-100 text-base-content': !overlaySrc, // light (default)
        'bg-base-content text-base-100 bg-cover bg-center bg-fixed bg-no-repeat': overlaySrc, // dark
      },
    ]"
    :style="{ backgroundImage: overlaySrc ? `url('${overlayUrl}')` : undefined }"
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
