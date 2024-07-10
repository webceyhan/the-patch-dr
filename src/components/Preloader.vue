<script setup lang="ts">
import { usePage } from "../composables/usePage";

const { isLoading } = usePage();
</script>

<template>
  <Transition
    leave-to-class="opacity-0"
    leave-active-class="transition ease-out duration-1000"
  >
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-base-content/95 flex justify-center items-center"
    >
      <span class="loading loading-dots w-1/12 text-base-100" />
    </div>
  </Transition>
</template>
