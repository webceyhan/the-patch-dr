<script setup lang="ts">
import { TESTIMONIALS } from "../data/testimonial";
import { useSlider } from "../composables/useSlider";
import Icon from "../components/Icon.vue";

const {
  index: activeIndex,
  item: activeItem,
  pause: pauseSlider,
  resume: resumeSlider,
  next: nextSlide,
} = useSlider(TESTIMONIALS);
</script>

<template>
  <section class="hero py-10 bg-base-200">
    <div
      class="hero-content text-center"
      @mouseleave="resumeSlider()"
      @mouseenter="pauseSlider()"
    >
      <div class="max-w-3xl flex flex-col items-center gap-8">
        <!-- header -->
        <h1 class="text-3xl font-bold uppercase">
          Hear From Our
          <span class="text-primary">Happy Clients</span>
        </h1>

        <Icon name="quote-left" class="size-12" />

        <!-- quote box -->
        <Transition
          mode="out-in"
          enter-from-class="translate-x-full "
          enter-active-class="transition duration-500"
          leave-to-class="opacity-0"
          leave-active-class="transition duration-300"
        >
          <blockquote class="h-48 md:h-28 space-y-2" :key="activeItem.name">
            <p>{{ activeItem.review }}</p>
            <small class="text-neutral-500">
              {{ activeItem.name }}, {{ activeItem.location }}.
            </small>
          </blockquote>
        </Transition>

        <!-- indicators -->
        <nav class="flex w-full justify-center gap-8 py-2">
          <div
            class="avatar"
            v-for="(item, index) in TESTIMONIALS"
            @click="nextSlide(index)"
          >
            <div
              :class="[
                'ring-offset-base-100 w-20 rounded-full ring ring-offset-2 cursor-pointer',
                { 'ring-primary': index === activeIndex },
              ]"
            >
              <img :src="`/images/testimonials/${item.avatarUri}`" :alt="item.name" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>
