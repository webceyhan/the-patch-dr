<script setup lang="ts">
import { COMPANY } from "../data/company";
import { CONTACT_LINKS, SOCIAL_LINKS } from "../data/contact";
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionSubtitle from "../components/SectionSubtitle.vue";
import Icon from "../components/Icon.vue";
import Link from "../components/Link.vue";
</script>

<template>
  <Section overlaySrc="/images/contact-section-bg.jpg">
    <footer class="footer footer-center">
      <!-- header -->
      <header>
        <SectionTitle>Get In Touch</SectionTitle>

        <SectionSubtitle class="text-fancy-primary">
          Connect with us via email or phone, or check out our online profiles
        </SectionSubtitle>
      </header>

      <!-- contact info -->
      <nav class="flex flex-col place-items-start gap-4 py-10">
        <div
          v-for="link in CONTACT_LINKS"
          class="flex items-center text-lg md:text-xl gap-3"
        >
          <Icon :name="link.icon!" class="text-neutral-400 size-4" />
          <span class="text-neutral-400 w-20 md:w-28 text-left">{{ link.alt }}:</span>
          <Link :href="link.href" :label="link.label" target="_blank" />
        </div>
      </nav>

      <!-- social links -->
      <nav class="grid grid-flow-col gap-4">
        <Link v-for="link in SOCIAL_LINKS" :href="link.href!" target="_blank" greyed>
          <Icon :name="link.icon!" class="size-16 rounded-full ring-4" />
        </Link>
      </nav>

      <!-- copyright -->
      <aside class="text-lg md:text-2x text-neutral-400 tracking-widest">
        <p>Copyright © {{ COMPANY.name }} 2024</p>
      </aside>
    </footer>
  </Section>
</template>
