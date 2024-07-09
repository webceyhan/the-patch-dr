<script setup lang="ts">
import { computed, ref } from "vue";
import FaIcon from "./FaIcon.vue";

const CATEGORIES = [
  "all",
  "basement",
  "kitchen",
  "painting",
  "sanitary",
  "electrical",
  "plumbing",
];

type Category = typeof CATEGORIES[number];

interface Item {
  id: string;
  title: string;
  location: string;
  description: string;
  categories: Category[];
  photos: {
    name: string;
    alt: string;
  }[];
}

const ITEMS: Item[] = [
  {
    id: "interior-repaint",
    title: "Interior Repaint",
    location: "Thornbury",
    description:
      "Complete 2 room crack repair & repaint of an Art Deco property in Thornbury.",
    categories: ["all", "basement", "kitchen", "painting"],
    photos: [
      {
        name: "interior-repaint-1.jpg",
        alt: "FULL REPAIR & REPAINT. FYFFE ST, THORNBURY.",
      },
    ],
  },
  {
    id: "cafe-renovation",
    title: "Cafe Renovation",
    location: "Richmond",
    description:
      "Complete plaster repair & repaint of a new organic food cafe on the outskirts of Richmond.",
    categories: ["all", "sanitary", "kitchen", "electrical"],
    photos: [
      {
        name: "cafe-renovation-1.jpg",
        alt: "COMPLETE INTERIOR/EXTERIOR REPAINT. FRESH ORGANIC GOODS, RICHMOND",
      },
    ],
  },

  {
    id: "extension-plastering",
    title: "Extension Plastering",
    location: "Epping",
    description: "Plastering of a brand new rumpus room extension in Epping.",
    categories: ["all", "kitchen", "painting"],
    photos: [
      {
        name: "extension-plastering-1.jpg",
        alt: "COMPLETE EXTENSION PLASTERING IN EPPING",
      },
    ],
  },

  {
    id: "plaster-repairs",
    title: "Plaster Repairs",
    location: "Melbourne CBD",
    description:
      "Numerous repairs & painting preparation work for a modern office building in St Kilda Rd, Melbourne.",
    categories: ["all", "electrical", "kitchen"],
    photos: [
      {
        name: "plaster-repairs-1.jpg",
        alt: "PRE-PAINTING REPAIR WORK. ST KILDA RD, MELBOURNE",
      },
    ],
  },
  {
    id: "restaurant-renovation",
    title: "Restaurant Renovation",
    location: "Collingwood",
    description:
      "Complete renovation & repaint of a modern Indian eatery named Madras Brothers. Smith St, Collingwood.",
    categories: ["all", "plumbing", "kitchen"],
    photos: [
      {
        name: "restaurant-renovation-1.jpg",
        alt: "COMPLETE INTERIOR & EXTERIOR REPAINT. MADRAS BROS, COLLINGWOOD",
      },
      {
        name: "restaurant-renovation-2.jpg",
        alt: "EXTERIOR COURTYARD REPAINT, BEFORE & AFTER.",
      },
      {
        name: "restaurant-renovation-3.jpg",
        alt: "MADRAS BROS, COLLINGWOOD.",
      },
      {
        name: "restaurant-renovation-4.jpg",
        alt: "ENTRY & SHOPFRONT REPAINT, BEFORE & AFTER. MADRAS BROS, COLLINGWOOD.",
      },
    ],
  },
  {
    id: "patch-repair",
    title: "Patch Repair",
    location: "Keysborough",
    description: "Medium plaster wall repair after an accident exiting their manhole.",
    categories: ["all", "basement", "painting"],
    photos: [
      {
        name: "patch-repair-1.jpg",
        alt: "Patch Repair",
      },
    ],
  },
  {
    id: "ceiling-repairs",
    title: "Ceiling Repairs",
    location: "Richmond",
    description:
      "Former downlight hole & crack repairs in a modern apartment in Richmond.",
    categories: ["all", "sanitary", "plumbing"],
    photos: [
      {
        name: "ceiling-repairs-1.jpg",
        alt: "CEILING REPAIRS, RICHMOND",
      },
    ],
  },
  {
    id: "downlight-repairs",
    title: "Downlight Repairs",
    location: "Kensington",
    description:
      "Repairing numerous ceiling holes caused by switching to smaller downlights.",
    categories: ["all", "kitchen", "electrical"],
    photos: [
      {
        name: "downlight-repairs-1.jpg",
        alt: "MULTIPLE DOWNLIGHT HOLE REPAIRS, KENSINGTON.",
      },
    ],
  },
];

const filter = ref("all");
const photos = ref<Item["photos"]>([]);

const filteredItems = computed(() =>
  filter.value === "all"
    ? ITEMS
    : ITEMS.filter((item) => item.categories.includes(filter.value))
);
</script>

<template>
  <section class="container mx-auto p-4 md:py-10 flex flex-col items-center space-y-10">
    <!-- header -->
    <header class="text-3xl font-bold uppercase text-center text-neutral-400">
      A few of our recent projects
    </header>

    <!-- filters -->
    <ul class="menu menu-sm bg-base-200 rounded-box max-h-14 overflow-x-scroll">
      <li v-for="category in CATEGORIES">
        <a :class="{ active: filter === category }" @click.prevent="filter = category">
          {{ category }}
        </a>
      </li>
    </ul>

    <!-- grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- card -->
      <div
        v-for="item in filteredItems"
        class="card image-full text-base-content shadow-xl overflow-hidden"
      >
        <figure>
          <img
            :src="`/images/work/${item.id}-cover.jpg`"
            class="object-cover w-full h-full"
            :alt="item.title"
            loading="lazy"
          />
        </figure>

        <div
          class="card-body bg-black/90 opacity-0 hover:opacity-100 transition-all duration-500"
        >
          <h2 class="card-title uppercase text-primary">{{ item.title }}</h2>

          <h3 class="text-neutral-400 font-bold">Location: {{ item.location }}</h3>

          <p class="text-white py-4">{{ item.description }}</p>

          <div class="card-actions justify-end">
            <button class="btn btn-sm bg-white" @click="photos = item.photos">
              Take a look
            </button>
          </div>
        </div>
      </div>
    </div>

    <Teleport v-if="photos.length" to="body">
      <div
        class="fixed inset-0 z-[999] bg-black/90 flex flex-col items-center justify-center p-10"
      >
        <button class="btn btn-lg btn-circle fixed top-4 right-4" @click="photos = []">
          <FaIcon name="x" style="width: 32px; height: 32px" />
        </button>

        <div class="carousel carousel-center rounded-box w-full">
          <div v-for="photo in photos" class="carousel-item w-full">
            <img
              class="w-full object-cover"
              :src="`/images/work/${photo.name}`"
              :alt="photo.alt"
            />
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.card.image-full:before {
  opacity: 0;
}
</style>
