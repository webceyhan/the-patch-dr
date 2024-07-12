<script setup lang="ts">
import { COMPANY } from "../data/company";
import Section from "../components/Section.vue";
import Icon from "../components/Icon.vue";
</script>

<template>
  <Section class="relative">
    <template #overlay>
      <img
        class="absolute -left-4 bottom-0 md:max-w-md"
        src="/images/call-action-section-bg.jpg"
      />
    </template>

    <template #title>
      <span class="text-neutral-400">SNAP, </span>
      <span class="text-primary">TEXT, </span>
      <span class="text-neutral-600">QUOTE.</span>
    </template>

    <div class="max-w-3xl text-xl backdrop-blur-sm space-y-10">
      <p>
        We understand youʼre busy, and frankly, so are we. So weʼve devised a simple
        strategy to make life easier for both of us. Itʼs almost like rocket science, for
        <i>pre-schoolers.</i>
      </p>

      <p>
        Simply <b>SNAP</b> your job on your Smart Phone or Tablet, <b>TEXT</b> the photos
        through to our mobile number, and receive an estimated repair <b>QUOTE</b> within
        a couple of hours. Be also sure to include your name, suburb, and any special
        details or requests.
      </p>

      <p>Because life wasnʼt meant to be complicated.</p>

      <p></p>

      <a
        class="btn btn-block btn-primary h-20 text-2xl tracking-widest rounded-full gap-4"
        :href="`tel:${COMPANY.phone}`"
      >
        <Icon name="phone" class="size-8" />
        {{ COMPANY.phone }}
      </a>
    </div>
  </Section>
</template>
