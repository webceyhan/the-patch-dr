<script setup lang="ts">
import { ref } from "vue";
import { NAV_LINKS } from "../data";
import { useSpy } from "../composables/useSpy";
import { useScroll } from "../composables/useScroll";
import Icon from "./Icon.vue";

const isMenuOpen = ref(false);
const { visibleHash } = useSpy();
const { wasScrolled } = useScroll(200);
</script>

<template>
  <nav
    role="navigation"
    :class="[
      'navbar fixed top-0 z-[9999] bg-base-100 dark:md:bg-transparent',
      { dark: !wasScrolled },
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
        <li v-for="link in NAV_LINKS">
          <a
            :href="link.href"
            :class="[
              'uppercase px-2 dark:text-base-100/50 dark:hover:text-base-100',
              { 'text-primary': link.href === visibleHash },
            ]"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>

    <!-- mobile menu -->
    <div v-if="isMenuOpen" class="fixed md:hidden inset-x-0 top-14 bg-base-100">
      <ul class="menu w-full p-4" @click="isMenuOpen = false">
        <li v-for="link in NAV_LINKS" class="w-full">
          <a :href="link.href" class="uppercase">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>

    <!-- mobile menu toggle -->
    <div class="navbar-end md:hidden">
      <button class="btn btn-square btn-ghost" @click="isMenuOpen = !isMenuOpen">
        <Icon name="bars" />
      </button>
    </div>
  </nav>
</template>
