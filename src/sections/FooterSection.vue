<script setup lang="ts">
import { COMPANY } from "../data/company";
import { CONTACT_LINKS, SOCIAL_LINKS } from "../data/contact";
import Icon from "../components/Icon.vue";
import SocialLink from "../components/SocialLink.vue";
</script>

<template>
  <section
    :class="[
      'min-h-screen flex flex-col justify-center px-4 py-10 md:py-20',
      'text-base-100 bg-cover bg-center bg-fixed bg-no-repeat',
    ]"
    style="background-image: url('/images/contact-section-bg.jpg')"
  >
    <footer class="footer footer-center">
      <!-- header -->
      <header class="space-y-2">
        <h1 class="text-3xl md:text-5xl font-bold">Get In Touch</h1>

        <h2 class="text-xl text-primary">
          Connect with us via email or phone, or check out our online profiles
        </h2>
      </header>

      <!-- contact info -->
      <nav class="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 place-items-start gap-4">
        <div v-for="link in CONTACT_LINKS" class="flex items-center text-lg gap-2">
          <Icon :name="link.icon!" class="text-neutral-400" />
          <span class="text-neutral-400">{{ link.alt }}:</span>

          <a v-if="link.href" :href="link.href" target="_blank" class="link link-hover">
            {{ link.label }}
          </a>

          <span v-else> {{ link.label }} </span>
        </div>
      </nav>

      <!-- social links -->
      <nav class="flex-1">
        <div class="grid grid-flow-col gap-4">
          <SocialLink
            v-for="link in SOCIAL_LINKS"
            :href="link.href!"
            :imageUri="`/images/social/${link.icon}.png`"
          />
        </div>
      </nav>

      <!-- copyright -->
      <aside class="text-neutral-500 tracking-widest">
        <p>Copyright © {{ COMPANY.name }} 2024</p>
      </aside>
    </footer>
  </section>
</template>
