<script setup lang="ts">
import { onMounted, ref } from "vue";

const isLoading = ref(true);

onMounted(() => {
  document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      isLoading.value = false;
    }
  };
});
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
