<script setup lang="ts">
import FaIcon from "./FaIcon.vue";
import ServicesSection from "./ServicesSection.vue";
import FeaturesSection from "./FeaturesSection.vue";
import PortfolioSection from "./PortfolioSection.vue";
import TestimonialsSection from "./TestimonialsSection.vue";
import ContactSection from "./ContactSection.vue";
import FooterSection from "./FooterSection.vue";
import CallActionSection from "./CallActionSection.vue";
import AboutSection from "./AboutSection.vue";
import WelcomeSection from "./WelcomeSection.vue";
import Navbar from "./Navbar.vue";
import Preloader from "./Preloader.vue";
</script>

<template>
  <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <Preloader />

    <!-- Backstretch Carousel -->
    <div class="backstretch-carousel"></div>

    <Navbar />

    <WelcomeSection id="welcome" />

    <ServicesSection id="service" />

    <AboutSection id="about" />

    <CallActionSection id="call-action" />

    <FeaturesSection id="features" />

    <PortfolioSection id="portfolio" />

    <TestimonialsSection id="testimonials" />

    <ContactSection id="contact" />

    <FooterSection />

    <!-- Scroll to Top Start -->
    <div class="scroll-to-top affix" data-spy="affix" data-offset-top="200">
      <a href="#page-top" class="page-scroll">
        <FaIcon name="arrow-up" />
      </a>
    </div>
    <!-- Scroll to Top End -->
  </div>
</template>
