<script setup lang="ts">
import { useSlider } from "../composables/useSlider";
import FaIcon from "./FaIcon.vue";

interface Testimonial {
  name: string;
  location: string;
  review: string;
  avatarUri: string;
}

const ITEMS: Testimonial[] = [
  {
    name: "Janette Eley",
    location: "Frankston South",
    review:
      "The Patch Dr. did a great job. Very neat work, and Iʼm happy with the end result.",
    avatarUri: "janette-eley.jpg",
  },
  {
    name: "William Nguyen",
    location: "Footscray",
    review:
      "Dallas helped me do some urgent patching of some holes which were made while installing ceiling fans in my apartment. He was more than happy to accommodate my tight schedule, and the patching work was fantastic. I’d highly recommend The Patch Dr. to anyone.",
    avatarUri: "william-nguyen.jpg",
  },
  {
    name: "Osher Klein",
    location: "St Kilda East",
    review:
      "Dallas was very quick to respond, and came & completed the job the following day. He did a great job and left our house looking neat and tidy!",
    avatarUri: "osher-klein.jpg",
  },
];

const {
  index: activeIndex,
  item: activeItem,
  pause: pauseSlider,
  resume: resumeSlider,
  next: nextSlide,
} = useSlider(ITEMS);
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

        <FaIcon name="quote-left" style="width: 48px; height: 48px" />

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
          <div v-for="(item, index) in ITEMS" class="avatar" @click="nextSlide(index)">
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
