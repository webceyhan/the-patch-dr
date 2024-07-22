<script setup lang="ts">
import { SERVICES } from "../data/service";
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
import Card from "../components/Card.vue";
</script>

<template>
  <Section>
    <SectionTitle> What we do <span class="text-fancy-primary">best</span> </SectionTitle>

    <!-- grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Card
        v-for="service in SERVICES"
        class="bg-primary text-primary-content"
        :overlaySrc="service.imageUri"
        :title="service.title"
      />
    </div>
  </Section>
</template>
