<script setup lang="ts">
import { ref } from "vue";
import { NAV_LINKS } from "../data/app";
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
      'navbar fixed top-0 z-[9999]',
      'bg-base-100 dark:md:bg-transparent transition-colors duration-300',
      { dark: !wasScrolled },
    ]"
  >
    <div class="container mx-auto md:dark:py-10 transition-all duration-500">
      <!-- logo -->
      <div class="flex-1">
        <a href="#page-top" class="btn btn-link w-56">
          <img src="/images/logo-navbar.png" class="dark:md:hidden" />
          <img src="/images/logo-navbar-dark.png" class="hidden dark:md:inline" />
        </a>
      </div>

      <!-- desktop menu -->
      <div class="flex-none max-md:hidden">
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
      <Transition
        mode="out-in"
        enter-from-class="-translate-y-full opacity-0"
        enter-active-class="transition-all duration-500"
        leave-to-class="-translate-y-full opacity-0"
        leave-active-class="transition duration-500"
      >
        <div v-if="isMenuOpen" class="md:hidden fixed inset-x-0 top-14 bg-base-100 -z-50 shadow-lg">
          <ul class="menu w-full p-4" @click="isMenuOpen = false">
            <li v-for="link in NAV_LINKS" class="w-full">
              <a :href="link.href" class="uppercase">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </Transition>

      <!-- mobile menu toggle -->
      <div class="flex-none md:hidden">
        <button class="btn btn-square btn-ghost" @click="isMenuOpen = !isMenuOpen">
          <Icon name="bars" />
        </button>
      </div>
    </div>
  </nav>
</template>
