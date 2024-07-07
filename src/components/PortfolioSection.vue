<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

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

const filteredItems = computed(() =>
  filter.value === "all"
    ? ITEMS
    : ITEMS.filter((item) => item.categories.includes(filter.value))
);

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const $ = (window as any).$ as any;

  $(".portfolio a[data-rel^='prettyPhoto']").prettyPhoto({ hook: "data-rel" });
});
</script>

<template>
  <section class="content-section">
    <div class="container">
      <div class="text-center">
        <h2 class="title light_grey">A few of our recent projects</h2>
      </div>

      <div class="filters text-center">
        <button
          v-for="category in CATEGORIES"
          :class="['btn btn-default', { active: filter === category }]"
          @click="filter = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="container">
      <ul class="row portfolio desktop_text">
        <li
          v-for="item in filteredItems"
          class="col-xs-6 col-sm-6 col-lg-3 portfolio-item"
        >
          <figure>
            <div>
              <img
                :src="`/images/work/${item.id}-cover.jpg`"
                :alt="item.title"
                loading="lazy"
              />
            </div>

            <figcaption>
              <h4>{{ item.title }}</h4>

              <p class="light_grey">Location: {{ item.location }}</p>

              <p>
                {{ item.description }}
              </p>

              <a
                v-for="photo in item.photos"
                :href="`/images/work/${photo.name}`"
                :data-rel="`prettyPhoto[${item.id}]`"
                :title="photo.alt"
              >
                Take a look
              </a>
            </figcaption>
          </figure>
        </li>
      </ul>

      <!-- mobile version -->
      <ul class="row portfolio mobile_text">
        <li
          v-for="item in filteredItems"
          class="col-lg-3 col-sm-6 col-xs-6 portfolio-item"
        >
          <figure>
            <div>
              <img
                :src="`/images/work/${item.id}-cover.jpg`"
                :alt="item.title"
                loading="lazy"
              />
            </div>
          </figure>
        </li>
      </ul>

      <div class="row mobile_text">
        <div class="col-md-12 text-center">
          <p class="gallery_note grey">Full Gallery available on Desktop site</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  padding-top: 80px;
  padding-bottom: 50px;
}

.title {
  margin-bottom: 35px;
}

.portfolio {
  padding: 0;
  max-width: 1300px;
  margin: 0 auto 15px;
  list-style: none;
}

.portfolio-item {
  margin: 0;
  padding: 0;
  display: inline-block;
  text-align: left;
  position: relative;
}
.portfolio-item img {
  width: 100%;
  height: auto;
}

.portfolio-item figure {
  padding: 15px;
  margin: 0;
  position: relative;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.portfolio-item figure > div {
  overflow: hidden;
}
.portfolio-item figure img {
  max-width: 100%;
  display: block;
  position: relative;
  -webkit-transition: -webkit-transform 0.4s;
  -moz-transition: -moz-transform 0.4s;
  transition: transform 0.4s;
}

.portfolio-item figcaption {
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px 20px;
  background: rgba(0, 0, 0, 0.8);
  color: #000;
  margin: 15px;
  height: calc(100% - 30px);
  width: calc(100% - 30px);
  opacity: 0;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotateY(-90deg);
  -moz-transform: rotateY(-90deg);
  transform: rotateY(-90deg);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.1s 0.3s;
  -moz-transition: -moz-transform 0.4s, opacity 0.1s 0.3s;
  transition: transform 0.4s, opacity 0.1s 0.3s;
}
.portfolio-item figcaption h4 {
  letter-spacing: -1px;
  margin: 0 0 10px;
  padding: 0;
  color: #eb5e54;
}
.portfolio-item figcaption p {
  color: #ffffff;
  line-height: 1.3;
}
.portfolio-item figcaption a {
  text-align: center;
  padding: 5px 10px;
  border-radius: 2px;
  display: inline-block;
  background: #fff;
  color: #5e5f5f;
  font-weight: 400;
  position: absolute;
  bottom: 25px;
  left: 20px;
  font-size: 14px;
  padding: 4px 8px;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -ms-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.portfolio-item figcaption a:hover {
  color: #ffffff;
  background: #eb5e54;
}

.portfolio-item figure:hover img {
  -webkit-transform: translateX(0%);
  -moz-transform: translateX(0%);
  -ms-transform: translateX(0%);
  transform: translateX(0%);
}
.portfolio-item figure:hover figcaption {
  opacity: 1;
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.1s;
  -moz-transition: -moz-transform 0.4s, opacity 0.1s;
  transition: transform 0.4s, opacity 0.1s;
}

@media (max-width: 436px) {
  .content-section {
    padding-top: 60px;
    padding-bottom: 30px;
  }

  .portfolio-item figure {
    padding: 0;
  }
  .portfolio-item figcaption {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  .portfolio-item figcaption p {
    display: none;
  }
}

@media (min-width: 436px) and (max-width: 800px) {
  .portfolio-item {
    width: 50%;
  }
}

.pp_gallery,
div.pp_default .pp_nav .currentTextHolder,
div.pp_default .pp_expand {
  display: none !important;
}
div.pp_default .pp_description {
  text-transform: uppercase;
}
</style>
