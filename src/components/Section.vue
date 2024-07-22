<script setup lang="ts">
import { ref } from "vue";
import { useLazyBackground } from "../composables/useLazyBackground";

/**
 * Types
 */
interface Props {
  overlaySrc?: string;
  centered?: boolean;
  dark?: boolean;
}

const { overlaySrc } = defineProps<Props>();

const section = ref<HTMLElement | null>(null);

overlaySrc && useLazyBackground(section, overlaySrc);
</script>

<template>
  <section
    ref="section"
    :data-theme="dark || overlaySrc ? 'dark' : 'light'"
    :class="[
      'hero min-h-screen px-4 py-10 md:py-20 spy',
      {
        'bg-cover bg-center bg-fixed bg-no-repeat': overlaySrc,
      },
    ]"
  >
    <!-- overlay -->
    <slot name="overlay" />

    <div :class="['hero-content text-lg md:text-xl font-semibold', { 'text-center': centered }]">
      <div :class="['flex flex-col gap-10', { 'items-center': centered }]">
        <!-- content -->
        <slot />
      </div>
    </div>
  </section>
</template>
