<script setup lang="ts">
import { COMPANY } from "../data/company";
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
import Image from "../components/Image.vue";
</script>

<template>
  <Section overlaySrc="/images/about-section-bg.jpg">
    <SectionTitle>
      From the smallest patch repair to the whole house reno,
      <span class="text-primary">{{ COMPANY.name }}</span> has you covered.
    </SectionTitle>

    <div class="flex flex-col lg:flex-row items-center gap-10">
      <div class="space-y-10">
        <p>
          At {{ COMPANY.name }}, we never judge a job by it’s size or cover. We view every
          single project as a unique creative challenge, and a chance to be the cure to
          your home improvement headaches.
        </p>

        <p>
          From that accidental hole in your wall, to the fresh new coat of paint, to your
          brand new extension plastering - You name it, and we’re happy to take it on.
          This policy is based on a genuine passion for our work, creative problem
          solving, and the satisfaction of transforming your eyesores into art. With years
          of professional experience, surgical attention to detail, and personal service
          with a smile, look no further for your one-stop home improvement needs.
        </p>

        <p>Call or text us today to arrange a no obligation quote.</p>
      </div>

      <Image
        class="lg:max-w-lg rounded-badge opacity-85"
        src="/images/about-section-highlights.jpg"
        lazy
      />
    </div>
  </Section>
</template>
