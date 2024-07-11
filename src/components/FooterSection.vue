<script setup lang="ts">
import { COMPANY, CONTACT_LINKS, SOCIAL_LINKS } from "../data";
import FaIcon from "./FaIcon.vue";
</script>

<template>
  <footer
    class="footer footer-center bg-black bg-cover bg-center bg-no-repeat text-base-100 p-10"
    style="background-image: url('/images/contact-section-bg.jpg')"
  >
    <header>
      <h1 class="text-3xl">Get In Touch</h1>

      <h2 class="text-xl text-primary">
        Connect with us via email or phone, or check out our online profiles
      </h2>
    </header>

    <!-- contact info -->
    <nav
      class="grid grid-flow-col- grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-10 place-items-start"
    >
      <div v-for="link in CONTACT_LINKS" class="flex items-center gap-2">
        <FaIcon :name="link.icon!" class="text-neutral-400" />
        <span class="text-neutral-400">{{ link.alt }}:</span>

        <a v-if="link.href" :href="link.href" target="_blank" class="link link-hover">
          {{ link.label }}
        </a>

        <span v-else> {{ link.label }} </span>
      </div>
    </nav>

    <!-- social links -->
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a
          v-for="link in SOCIAL_LINKS"
          :href="link.href"
          target="_blank"
          class="grayscale hover:grayscale-0 transition-all duration-300"
        >
          <img class="size-14" :src="`/images/social/${link.icon}.png`" />
        </a>
      </div>
    </nav>

    <!-- copyright -->
    <aside class="text-neutral-500 tracking-widest">
      <p>Copyright © {{ COMPANY.name }} 2024</p>
    </aside>
  </footer>
</template>
