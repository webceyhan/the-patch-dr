<script setup lang="ts">
import { SERVICES } from "../data";
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
              <li v-for="feature in service.features">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
