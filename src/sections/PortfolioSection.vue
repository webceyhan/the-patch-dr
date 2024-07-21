<script setup lang="ts">
import { computed, ref } from "vue";
import { WORKS, WORK_TAGS } from "../data/work";
import Section from "../components/Section.vue";
import Card from "../components/Card.vue";
import Icon from "../components/Icon.vue";

const filter = ref("all");
const photos = ref<typeof WORKS[0]["photos"]>([]);

const filteredWorks = computed(() =>
  filter.value === "all"
    ? WORKS
    : WORKS.filter((item) => item.tags.includes(filter.value))
);
</script>

<template>
  <Section>
    <template #title class="uppercase text-neutral-400">
      A few of our recent projects
    </template>

    <!-- filters -->
    <ul
      class="menu menu-sm md:menu-horizontal bg-base-200 justify-center rounded-box max-h-14 overflow-x-scroll"
    >
      <li v-for="tags in WORK_TAGS">
        <a :class="{ active: filter === tags }" @click.prevent="filter = tags">
          {{ tags }}
        </a>
      </li>
    </ul>

    <!-- grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <!-- card -->
      <Card
        v-for="item in filteredWorks"
        class="text-base-content"
        :overlaySrc="item.imageUri"
        flipped
      >
        <h2 class="card-title text-primary uppercase">{{ item.title }}</h2>

        <h3 class="text-neutral-400 font-bold">Location: {{ item.location }}</h3>

        <p class="text-white py-4">{{ item.description }}</p>

        <div class="card-actions justify-end">
          <button class="btn btn-sm bg-white" @click="photos = item.photos">
            Take a look
          </button>
        </div>
      </Card>
    </div>

    <Teleport v-if="photos.length" to="body">
      <div
        class="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center p-10"
      >
        <button class="btn btn-lg btn-circle fixed top-4 right-4" @click="photos = []">
          <Icon name="x" class="size-8" />
        </button>

        <div class="carousel carousel-center rounded-box w-full">
          <div v-for="photo in photos" class="carousel-item w-full">
            <img class="w-full object-cover" :src="photo.uri" :alt="photo.alt" />
          </div>
        </div>
      </div>
    </Teleport>
  </Section>
</template>
