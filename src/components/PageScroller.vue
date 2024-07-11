<script setup lang="ts">
import { useScroll } from "../composables/useScroll";
import Icon from "./Icon.vue";

const { wasScrolled } = useScroll(200);
</script>

<template>
  <div v-show="wasScrolled" class="fixed bottom-4 right-4">
    <a href="#page-top" class="btn btn-square">
      <Icon name="arrow-up" class="size-6" />
    </a>
  </div>
</template>
