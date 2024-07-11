<script setup lang="ts">
import SocialLink from "../components/SocialLink.vue";
import { COMPANY } from "../data/company";
</script>

<template>
  <section
    class="hero bg-cover bg-center bg-no-repeat text-base-100 h-auto md:min-h-screen py-10 pt-20"
    style="background-image: url('/images/welcome-section-bg.jpg')"
  >
    <div class="hero-content text-center h-full">
      <div class="max-w-2xl flex flex-col items-center h-full">
        <div class="flex-1" />

        <h1 class="text-4xl md:text-6xl font-bold">
          SURGERY, FOR <span class="text-primary">SPACES</span>.
        </h1>

        <p class="text-lg py-8 flex-1">
          Combining quality, price, and friendly customer service, we offer one of the
          best property improvement services in Melbourne. Read our testimonials, and get
          in touch with us for a free quote today.
        </p>

        <SocialLink
          :label="COMPANY.phone"
          :href="`tel:${COMPANY.phone}`"
          :imageUri="`/images/social/phone.png`"
        />
      </div>
    </div>
  </section>
</template>
