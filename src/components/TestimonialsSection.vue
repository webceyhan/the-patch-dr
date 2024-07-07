<script setup lang="ts">
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
      "Dallas was very quick to respond, and came &amp; completed the job the following day. He did a great job and left our house looking neat and tidy!",
    avatarUri: "osher-klein.jpg",
  },
];
</script>

<template>
  <section>
    <div class="content-section text-center">
      <div class="container">
        <h2 class="section-title grey">
          Hear From Our
          <span class="common-text-color">Happy Clients</span>
        </h2>

        <FaIcon name="quote-left" style="width: 32px; height: 32px" />
        <div id="testimonials-carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(item, index) in ITEMS"
              :class="[
                'item',
                {
                  active: index === 0,
                  next: index === 1,
                },
              ]"
            >
              <blockquote>
                <p>{{ item.review }}</p>
                <small> {{ item.name }}, {{ item.location }}. </small>
              </blockquote>
            </div>
          </div>

          <ol class="carousel-indicators">
            <li
              v-for="(item, index) in ITEMS"
              data-target="#testimonials-carousel"
              :data-slide-to="index"
              :class="{ active: index === 0 }"
            >
              <img
                :src="`/images/testimonials/${item.avatarUri}`"
                class="img-circle"
                :alt="item.name"
              />
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  padding-top: 80px;
  padding-bottom: 40px;
  width: 100%;
  background-color: #eee;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}

.carousel-control {
  background: 0;
}

.carousel-indicators {
  position: inherit;
  margin: 0;
  left: auto;
  width: 100%;
  bottom: auto;
  margin-bottom: 20px;
}
.carousel-indicators li {
  width: auto;
  height: auto;
  text-indent: 0;
  border: 0;
  border-radius: 60px;
  padding: 5px;
  margin: 5px !important;
  background: #fff;
  position: relative;
}
.carousel-indicators li.active {
  background: #494949;
}
.carousel-indicators li.active:before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: #494949;
  position: absolute;
  top: -15px;
  left: 50%;
  margin-left: -10px;
}
.carousel-indicators img {
  width: 64px;
  height: 64px;
}

@media (max-width: 436px) {
  .content-section {
    padding-top: 60px;
    padding-bottom: 20px;
  }
}
</style>
