<script setup lang="ts">
import { COMPANY } from "../data/company";
import Section from "../components/Section.vue";
import SocialLink from "../components/SocialLink.vue";
</script>

<template>
  <Section  overlaySrc="/images/welcome-section-bg.jpg" centered>
    <template #title> SURGERY, FOR <span class="text-primary">SPACES</span>. </template>

    <p class="max-w-3xl text-xl pb-20">
      Combining quality, price, and friendly customer service, we offer one of the best
      property improvement services in Melbourne. Read our testimonials, and get in touch
      with us for a free quote today.
    </p>

    <SocialLink
      :label="COMPANY.phone"
      :href="`tel:${COMPANY.phone}`"
      :imageUri="`/images/social/phone.png`"
    />
  </Section>
</template>
