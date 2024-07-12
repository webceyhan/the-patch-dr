<script setup lang="ts">
import { onMounted } from "vue";
import { useSpy } from "./composables/useSpy";
import Navbar from "./components/Navbar.vue";
import Preloader from "./components/Preloader.vue";
import PageScroller from "./components/PageScroller.vue";
import WelcomeSection from "./sections/WelcomeSection.vue";
import ServicesSection from "./sections/ServicesSection.vue";
import AboutSection from "./sections/AboutSection.vue";
import CallActionSection from "./sections/CallActionSection.vue";
import FeaturesSection from "./sections/FeaturesSection.vue";
import PortfolioSection from "./sections/PortfolioSection.vue";
import TestimonialsSection from "./sections/TestimonialsSection.vue";
import FooterSection from "./sections/FooterSection.vue";

onMounted(() => {
  useSpy().observe();
});
</script>

<template>
  <div id="page-top">
    <Preloader />

    <Navbar id="navbar" />

    <WelcomeSection id="welcome" />

    <ServicesSection id="service" />

    <AboutSection id="about" />

    <CallActionSection id="call-action" />

    <FeaturesSection id="features" />

    <PortfolioSection id="portfolio" />

    <TestimonialsSection id="testimonials" />

    <FooterSection id="contact" />

    <PageScroller />
  </div>
</template>
