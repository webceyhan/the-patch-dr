<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  active?: boolean;
}>();
</script>

<template>
  <div class="avatar w-20 cursor-pointer">
    <div
      :class="[
        'ring-offset-base-100 rounded-full ring ring-offset-2',
        { 'ring-primary': active },
      ]"
    >
      <img :src :alt />
    </div>
  </div>
</template>
