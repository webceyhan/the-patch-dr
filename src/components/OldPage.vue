<script setup lang="ts">
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
import PageScroller from "./PageScroller.vue";
</script>

<template>
  <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <Preloader />

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

    <PageScroller />
  </div>
</template>
