<script setup lang="ts">
import ServicesSection from "./components/ServicesSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";
import CallActionSection from "./components/CallActionSection.vue";
import AboutSection from "./components/AboutSection.vue";
import WelcomeSection from "./components/WelcomeSection.vue";
import Navbar from "./components/Navbar.vue";
import Preloader from "./components/Preloader.vue";
import PageScroller from "./components/PageScroller.vue";
</script>

<template>
  <div
    id="page-top"
    data-spy="scroll"
    data-target="#navbar"
    class="h-screen scroll-smooth"
  >
    <Preloader />

    <Navbar id="navbar" />

    <WelcomeSection id="welcome" />

    <ServicesSection id="service" />

    <AboutSection id="about" />

    <CallActionSection id="call-action" />

    <FeaturesSection id="features" />

    <PortfolioSection id="portfolio" />

    <TestimonialsSection id="testimonials" />

    <ContactSection id="contact" />

    <FooterSection />

    <PageScroller />
  </div>
</template>

<style scoped>
/* 
  ScrollSpy works when you set below properties but it breaks the sticky navbar.
  TODO: replace scrollspy with native vue / tailwindcss solution 
  
  #page-top {
    position: relative;
    overflow-y: scroll;
  }
*/
</style>
