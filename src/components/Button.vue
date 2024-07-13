<script setup lang="ts">
defineProps<{
  label?: string;
  href?: string;
  large?: boolean;
}>();
</script>

<template>
  <a
    :class="[
      'btn gap-4',
      {
        'btn-block h-16 text-3xl tracking-widest rounded-full': large,
      },
    ]"
    :href
  >
    <slot>{{ label }}</slot>
  </a>
</template>
