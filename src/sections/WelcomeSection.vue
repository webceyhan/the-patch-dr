<script setup lang="ts">
import { COMPANY } from "../data/company";
import Section from "../components/Section.vue";
import Button from "../components/Button.vue";
import Icon from "../components/Icon.vue";
</script>

<template>
  <Section overlaySrc="/images/welcome-section-bg.jpg" centered>
    <template #title> SURGERY, FOR <span class="text-primary">SPACES</span>. </template>

    <p class="max-w-3xl text-xl pb-20">
      Combining quality, price, and friendly customer service, we offer one of the best
      property improvement services in Melbourne. Read our testimonials, and get in touch
      with us for a free quote today.
    </p>

    <Button class="btn-primary btn-outline" :href="`tel:${COMPANY.phone}`" large>
      <Icon name="phone" class="size-8" />
      {{ COMPANY.phone }}
    </Button>
  </Section>
</template>
