<script setup lang="ts">
import { SERVICES } from "../data/service";
import Section from "../components/Section.vue";
</script>

<template>
  <Section>
    <template #title>
      <h1 class="text-neutral-400">WHAT WE DO BEST</h1>
    </template>

    <!-- grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- card -->
      <div
        v-for="service in SERVICES"
        class="card max-w-md bg-primary text-base-100 shadow-xl"
      >
        <figure>
          <img
            :src="`/images/services/${service.id}.png`"
            :alt="service.title"
            loading="lazy"
          />
        </figure>

        <div class="card-body py-6">
          <h2 class="card-title uppercase font-normal">{{ service.title }}</h2>
        </div>
      </div>
    </div>
  </Section>
</template>
