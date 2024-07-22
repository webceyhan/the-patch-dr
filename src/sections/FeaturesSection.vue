<script setup lang="ts">
import { SERVICES } from "../data/service";
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionSubtitle from "../components/SectionSubtitle.vue";
</script>

<template>
  <Section overlaySrc="/images/features-section-bg.jpg">
    <template #overlay>
      <img src="/images/logo-aside.png" class="absolute right-0 max-w-xs" />
    </template>

    <header>
      <SectionTitle> Our complete list of services </SectionTitle>

      <SectionSubtitle class="text-fancy-primary">
        Quality comes naturally with passion
      </SectionSubtitle>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-x-32">
      <div v-for="(service, index) in SERVICES" class="">
        <h3 class="text-2xl uppercase py-2">
          <span class="text-primary"> 0{{ index + 1 }}. </span>
          {{ service.title }}
        </h3>

        <ul class="list-disc pl-10">
          <li v-for="feature in service.features">{{ feature }}</li>
        </ul>
      </div>
    </div>
  </Section>
</template>
