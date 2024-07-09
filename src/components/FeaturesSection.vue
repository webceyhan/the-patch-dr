<script setup lang="ts">
interface Service {
  id: string;
  title: string;
  feautures: string[];
}

const SERVICES: Service[] = [
  {
    id: "repairs",
    title: "PLASTER REPAIRS",
    feautures: [
      "Plaster Hole Repairs",
      "Crack Repairs",
      "Water Damage Repairs",
      "Internal Render Repairs",
      "Decorative Rosette & Arch Removal",
      "General Patch & Repairs",
    ],
  },
  {
    id: "plastering",
    title: "FULL PLASTERING",
    feautures: [
      "Bathroom Reno WR Plastering",
      "Kitchen Reno Plastering",
      "New Extension Plastering",
      "Decorative Cornice Installation",
      "Sagging Ceiling Repair/Replacement",
      "Cornice to Square Set Transformation",
    ],
  },
  {
    id: "painting",
    title: "PAINTING",
    feautures: [
      "Interior Repainting",
      "Renovation/Extension Painting",
      "Enamel Doors & Trims",
      "Weatherboard Repair & Painting",
      "15+ Years Professional Experience",
    ],
  },
  {
    id: "consultancy",
    title: "CONSULTANCY",
    feautures: [
      "Colour Scheme Advice & Consultancy",
      "Design & Product Consultancy",
      // more features
    ],
  },
];
</script>

<template>
  <section
    class="hero bg-cover bg-center bg-no-repeat text-base-100 py-10 relative"
    style="background-image: url('/images/features-section-bg.jpg')"
  >
    <img src="/images/logo-aside.png" class="absolute right-0 max-w-xs" />

    <div class="hero-content">
      <div class="max-w-2xl space-y-8">
        <header class="text-center">
          <h1 class="text-3xl font-bold">OUR COMPLETE LIST OF SERVICES</h1>
          <h2 class="text-xl text-primary">QUALITY COMES NATURALLY WITH PASSION</h2>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-x-32">
          <div v-for="(service, index) in SERVICES" class="">
            <h3 class="text-2xl uppercase py-2">
              <span class="text-primary"> 0{{ index + 1 }}. </span>
              {{ service.title }}
            </h3>

            <ul class="list-disc pl-10">
              <li v-for="feature in service.feautures">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
