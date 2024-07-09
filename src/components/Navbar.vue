<script setup lang="ts">
import { onMounted, ref } from "vue";
import FaIcon from "./FaIcon.vue";

interface Link {
  href: string;
  title: string;
}

const LINKS: Link[] = [
  { href: "#service", title: "Snapshot" },
  { href: "#about", title: "About" },
  { href: "#call-action", title: "STQ" },
  { href: "#features", title: "Services" },
  { href: "#portfolio", title: "Gallery" },
  { href: "#testimonials", title: "Testimonials" },
  { href: "#contact", title: "Connect" },
];

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const activeHash = ref(location.hash);

onMounted(() => {
  // TODO: replace scrollspy with native vue / tailwindcss solution
  // move it to the App component and use a reactive variable
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeHash.value = `#${entry.target.id}`;
      }
    });
  });
  // observe sections for scrollspy
  LINKS.forEach(({ href }) => {
    const section = document.querySelector(href);
    if (section) observer.observe(section);
  });

  // update navbar styling on scroll
  window.onscroll = () => {
    const { body, documentElement } = document;
    isScrolled.value = body.scrollTop > 50 || documentElement.scrollTop > 50;
  };

  // update active link on hash change
  window.addEventListener("popstate", () => {
    activeHash.value = location.hash;
  });
});
</script>

<template>
  <nav
    role="navigation"
    :class="[
      'navbar fixed top-0 z-[9999] bg-base-100 dark:md:bg-transparent',
      { dark: !isScrolled },
    ]"
  >
    <!-- logo -->
    <div class="navbar-start">
      <a href="#page-top" class="btn btn-link w-56">
        <img src="/images/logo-navbar.png" class="dark:md:hidden" />
        <img src="/images/logo-navbar-dark.png" class="hidden dark:md:inline" />
      </a>
    </div>

    <!-- desktop menu -->
    <div class="navbar-center max-md:hidden">
      <ul class="menu menu-horizontal">
        <li v-for="link in LINKS">
          <a
            :href="link.href"
            :class="[
              'uppercase px-2 dark:text-base-100/50 dark:hover:text-base-100',
              { 'text-primary': activeHash === link.href },
            ]"
          >
            {{ link.title }}
          </a>
        </li>
      </ul>
    </div>

    <!-- mobile menu -->
    <div v-if="isMenuOpen" class="fixed md:hidden inset-x-0 top-14 bg-base-100">
      <ul class="menu w-full p-4" @click="isMenuOpen = false">
        <li v-for="link in LINKS" class="w-full">
          <a :href="link.href" class="uppercase">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </div>

    <!-- mobile menu toggle -->
    <div class="navbar-end md:hidden">
      <button class="btn btn-square btn-ghost" @click="isMenuOpen = !isMenuOpen">
        <FaIcon name="bars" />
      </button>
    </div>
  </nav>
</template>
