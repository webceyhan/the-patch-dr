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
  <section>
    <div class="content-section parallax">
      <div id="side-logo-wrapper">
        <img src="/images/logo-aside.png" />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h2 class="title">OUR COMPLETE LIST OF SERVICES</h2>
            <h4 class="common-text-color">QUALITY COMES NATURALLY WITH PASSION</h4>
          </div>
        </div>

        <div class="row">
          <div
            v-for="(service, index) in SERVICES"
            class="col-sm-12 col-md-5 col-md-offset-1"
          >
            <div class="features-item">
              <h3 class="features-title">
                <span class="common-text-color"> 0{{ index + 1 }}. </span>
                {{ service.title }}
              </h3>

              <ul>
                <li v-for="feature in service.feautures">{{ feature }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  width: 100%;
  color: #fff;
  background: url(/images/features-section-bg.jpg) center center no-repeat #000;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  padding-top: 80px;
  padding-bottom: 23px;
}

.content-section h4 {
  font-weight: 500;
}

#side-logo-wrapper {
  position: absolute;
  right: 0;
  width: 270px;
  margin-top: -75px;
}

#side-logo-wrapper img {
  width: 100%;
}

.features-title {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 300;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.18);
  letter-spacing: -1px;
  margin-top: 5px;
}

.features-item {
  margin-bottom: 50px;
}

@media (max-width: 436px) {
  .content-section {
    padding-top: 60px;
    padding-bottom: 10px;
    background: url(/images/features-section-bg-mobile.jpg) center center no-repeat
      #000;
  }
  .content-section h4 {
    font-size: 16px;
  }

  .features-title {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  #side-logo-wrapper {
    display: none;
  }
}
</style>
