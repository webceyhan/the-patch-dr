<script setup lang="ts">
interface Service {
  id: string;
  title: string;
}

const SERVICES: Service[] = [
  {
    id: "repairs",
    title: "Plaster Repairs",
  },
  {
    id: "plastering",
    title: "Plastering",
  },

  {
    id: "consultancy",
    title: "Consultancy",
  },
  {
    id: "painting",
    title: "Painting",
  },
];
</script>

<template>
  <section class="container mx-auto p-4 md:py-10">
    <!-- header -->
    <header class="text-3xl font-bold text-center text-neutral-400 py-10">
      WHAT WE DO BEST
    </header>

    <!-- grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- card -->
      <div v-for="service in SERVICES" class="card bg-primary text-base-100 shadow-xl">
        <figure>
          <img
            :src="`/images/services/${service.id}.png`"
            :alt="service.title"
            loading="lazy"
          />
        </figure>
        <div class="card-body py-4">
          <h2 class="card-title uppercase font-normal">{{ service.title }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>
