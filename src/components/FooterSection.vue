<script setup lang="ts">
import FaIcon from "./FaIcon.vue";

interface Link {
  label?: string;
  icon?: string;
  href?: string;
  value?: string;
}

const CONTACT_LINKS: Link[] = [
  {
    icon: "location-dot",
    label: "Location",
    value: "Melbourne, Australia",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "0422 782 198",
  },
  {
    icon: "envelope",
    label: "Email",
    href: "mailto:jobs@thepatchdr.com.au",
    value: "jobs@thepatchdr.com.au",
  },
  {
    icon: "globe",
    label: "Website",
    href: "http://www.thepatchdr.com.au/",
    value: "www.thepatchdr.com.au",
  },
];

const SOCIAL_LINKS: Link[] = [
  {
    icon: "facebook",
    href: "https://www.facebook.com/thepatchdr",
  },
  {
    icon: "tiktok",
    href: "https://www.tiktok.com/@thepatchdr",
  },
  {
    icon: "hipages",
    href: "https://www.hipages.com.au/thepatchdr",
  },
  {
    icon: "yellowpages",
    href:
      "https://www.yellowpages.com.au/vic/fitzroy/the-patch-dr-1000001742637-listing.html",
  },
];
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
        <label class="text-neutral-400">{{ link.label }}:</label>

        <a v-if="link.href" :href="link.href" target="_blank" class="link link-hover">
          {{ link.value }}
        </a>

        <span v-else> {{ link.value }} </span>
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
      <p>Copyright © The Patch Dr. 2024</p>
    </aside>
  </footer>
</template>
