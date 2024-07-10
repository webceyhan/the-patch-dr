<script setup lang="ts">
import { onMounted } from "vue";
import { useSpy } from "./composables/useSpy";
import Navbar from "./components/Navbar.vue";
import Preloader from "./components/Preloader.vue";
import WelcomeSection from "./components/WelcomeSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import AboutSection from "./components/AboutSection.vue";
import CallActionSection from "./components/CallActionSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import FooterSection from "./components/FooterSection.vue";
import PageScroller from "./components/PageScroller.vue";

onMounted(() => {
  useSpy().observe();
});
</script>

<template>
  <div id="page-top" class="h-screen scroll-smooth">
    <Preloader />

    <Navbar id="navbar" class="spy" />

    <WelcomeSection id="welcome" class="spy" />

    <ServicesSection id="service" class="spy" />

    <AboutSection id="about" class="spy" />

    <CallActionSection id="call-action" class="spy" />

    <FeaturesSection id="features" class="spy" />

    <PortfolioSection id="portfolio" class="spy" />

    <TestimonialsSection id="testimonials" class="spy" />

    <FooterSection />

    <PageScroller />
  </div>
</template>
