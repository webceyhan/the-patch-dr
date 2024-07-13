<script setup lang="ts">
import { TESTIMONIALS } from "../data/testimonial";
import { useSlider } from "../composables/useSlider";
import Section from "../components/Section.vue";
import Avatar from "../components/Avatar.vue";
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
  <Section class="bg-base-200" centered>
    <template #title>
      Hear from our
      <span class="text-primary">happy clients</span>
    </template>

    <div
      class="flex flex-col items-center gap-10"
      @mouseleave="resumeSlider()"
      @mouseenter="pauseSlider()"
    >
      <Icon name="quote-left" class="size-12" />

      <!-- quote box -->
      <Transition
        mode="out-in"
        enter-from-class="-translate-x-full"
        enter-active-class="transition duration-500"
        leave-to-class="opacity-0"
        leave-active-class="transition duration-300"
      >
        <blockquote class="md:max-w-4xl h-60 md:h-28 space-y-2" :key="activeItem.name">
          <p>{{ activeItem.review }}</p>
          <small class="text-neutral-500">
            {{ activeItem.name }}, {{ activeItem.location }}.
          </small>
        </blockquote>
      </Transition>

      <!-- indicators -->
      <nav class="flex w-full justify-center gap-10">
        <Avatar
          v-for="(item, index) in TESTIMONIALS"
          @click="nextSlide(index)"
          :src="`/images/testimonials/${item.avatarUri}`"
          :active="index === activeIndex"
          :alt="item.name"
        />
      </nav>
    </div>
  </Section>
</template>
