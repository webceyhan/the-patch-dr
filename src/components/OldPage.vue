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

    <!-- Welcome Header -->
    <header class="welcome">
      <div class="welcome-body">
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <h1 class="brand-heading">
                SURGERY<span class="friction">,</span> FOR
                <span class="common-text-color">SPACES.</span>
              </h1>
              <p class="welcome-text">
                Combining quality, price, and friendly customer service, we offer one of
                the best property improvement services in Melbourne. Read our
                testimonials, and get in touch with us for a free quote today.
              </p>
              <!--<a href="#service" class="btn btn-default btn-lg page-scroll">We know how to do the job right!</a>-->
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="phone_body text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <a href="tel:%200422%20782%20198"
              ><i
                ><img class="static" src="/images/social/phone.png" /><img
                  class="rollover"
                  src="/images/social/phone-hover.png"
              /></i>
              0422 782 198</a
            >
          </div>
        </div>
      </div>
    </div>

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
