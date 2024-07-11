<script setup lang="ts">
import { COMPANY } from "../data";
</script>

<template>
  <section
    class="hero bg-black bg-cover bg-center bg-no-repeat text-base-100 py-10"
    style="background-image: url('/images/about-section-bg.jpg')"
  >
    <div class="hero-content">
      <div class="max-w-2xl flex flex-col gap-8">
        <h1 class="text-3xl font-bold uppercase">
          From the smallest patch repair to the whole house reno, <br />
          <span class="text-primary">{{ COMPANY.name }}</span> has you covered.
        </h1>

        <p>
          At {{ COMPANY.name }}, we never judge a job by it’s size or cover. We view every
          single project as a unique creative challenge, and a chance to be the cure to
          your home improvement headaches.
        </p>

        <p>
          From that accidental hole in your wall, to the fresh new coat of paint, to your
          brand new extension plastering - You name it, and we’re happy to take it on.
          This policy is based on a genuine passion for our work, creative problem
          solving, and the satisfaction of transforming your eyesores into art. With years
          of professional experience, surgical attention to detail, and personal service
          with a smile, look no further for your one-stop home improvement needs.
        </p>

        <p>Call or text us today to arrange a no obligation quote.</p>

        <img src="/images/about-section-highlights.jpg" />
      </div>
    </div>
  </section>
</template>
