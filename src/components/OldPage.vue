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
</script>

<template>
  <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <!-- Preloader -->
    <div class="preloader">
      <div class="spinner">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Backstretch Carousel -->
    <div class="backstretch-carousel"></div>
    <!-- Navigation -->
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-main-collapse"
          >
            <FaIcon name="bars" />
          </button>
          <a class="navbar-brand page-scroll" href="#page-top">
            <img src="/images/TPD_Logo On Black.png" class="black_logo" />
            <img src="/images/TPD_Logo On White.png" class="white_logo" />
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul class="nav navbar-nav">
            <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
            <li class="hidden"><a href="#page-top"></a></li>
            <li class="active">
              <a class="page-scroll" href="#service">Snapshot</a>
            </li>
            <li class="">
              <a class="page-scroll" href="#about">About</a>
            </li>
            <li class="">
              <a class="page-scroll" href="#call-action">STQ</a>
            </li>
            <li class="">
              <a class="page-scroll" href="#features">Services</a>
            </li>
            <li class="">
              <a class="page-scroll" href="#portfolio">Gallery</a>
            </li>
            <li class="">
              <a class="page-scroll" href="#testimonials">Testimonials</a>
            </li>
            <li class="">
              <a class="page-scroll" href="#contact">Connect</a>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container -->
    </nav>

    
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
