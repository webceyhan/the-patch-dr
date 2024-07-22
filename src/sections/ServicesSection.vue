<script setup lang="ts">
import { SERVICES } from "../data/service";
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
import Card from "../components/Card.vue";
</script>

<template>
  <Section>
    <SectionTitle class="text-neutral-400 uppercase"> What we do best </SectionTitle>

    <!-- grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Card
        v-for="service in SERVICES"
        class="bg-primary text-base-100"
        :overlaySrc="service.imageUri"
        :title="service.title"
      />
    </div>
  </Section>
</template>
