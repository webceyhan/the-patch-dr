<script setup lang="ts">
defineProps<{
  label?: string;
  href?: string;
  greyed?: boolean;
}>();
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    :href
    :class="[
      'transition-all duration-500 disabled',
      {
        'link link-hover': href,
        'grayscale hover:grayscale-0 ': greyed,
      },
    ]"
  >
    <slot> {{ label }} </slot>
  </component>
</template>
