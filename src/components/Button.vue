<script setup lang="ts">
/**
 * Types
 */
interface Props {
  label?: string;
  href?: string;
  large?: boolean;
}

defineProps<Props>();
</script>

<template>
  <a
    :class="[
      'btn gap-4 shadow-lg shadow-neutral-400',
      {
        'btn-block h-16 text-3xl tracking-widest rounded-full': large,
      },
    ]"
    :href
  >
    <slot>{{ label }}</slot>
  </a>
</template>
