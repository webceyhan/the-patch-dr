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
  <section class="container">
    <div class="row content-section">
      <div class="col-lg-12">
        <h2 class="section-title text-center">WHAT WE DO BEST</h2>

        <div class="row">
          <div v-for="service in SERVICES" class="service-item col-lg-3 col-sm-6">
            <figure>
              <img
                :src="`/images/services/${service.id}.png`"
                :alt="service.title"
                loading="lazy"
              />

              <figcaption class="bg-primary">
                <h4>{{ service.title }}</h4>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  padding-top: 110px;
}

.section-title {
  color: #b7b7b7;
  margin-bottom: 45px;
  font-weight: 700;
  text-transform: uppercase;
}

.service-item {
  margin-bottom: 25px;
}

figure img {
  display: block;
  width: 100%;
  border-radius: 4px 4px 0 0;
}
figcaption {
  padding: 13px 22px;
  text-align: left;
  border-radius: 0 0 4px 4px;
}
figcaption h4 {
  font-weight: 400;
  color: #ffffff;
  margin: 0;
  padding: 0;
  letter-spacing: 0px;
  font-size: 20px;
}
figcaption p {
  margin: 0;
}

@media (max-width: 767px) {
  .section-title {
    color: #a8a8a8;
  }
}

@media (min-width: 767px) {
  .content-section {
    padding-top: 110px;
    padding-bottom: 50px;
  }
}
</style>
