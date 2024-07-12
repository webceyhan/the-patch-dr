<script setup lang="ts">
import { SERVICES } from "../data/service";
import Section from "../components/Section.vue";
import Card from "../components/Card.vue";
</script>

<template>
  <Section>
    <template #title>
      <h1 class="text-neutral-400">WHAT WE DO BEST</h1>
    </template>

    <!-- grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Card
        v-for="service in SERVICES"
        class="bg-primary text-base-100"
        :overlaySrc="`/images/services/${service.id}.png`"
        :title="service.title"
      />
    </div>
  </Section>
</template>
