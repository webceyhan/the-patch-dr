<script setup lang="ts">
import FaIcon from "./FaIcon.vue";
import ServicesSection from "./ServicesSection.vue";
import FeaturesSection from "./FeaturesSection.vue";
import PortfolioSection from "./PortfolioSection.vue";
import TestimonialsSection from "./TestimonialsSection.vue";
import ContactSection from "./ContactSection.vue";
import FooterSection from "./FooterSection.vue";
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
              <a class="page-scroll" href="#sqt">STQ</a>
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

    <!-- About Section Start -->
    <section id="about">
      <div class="about-section content-section parallax">
        <div class="container">
          <div class="col-lg-6">
            <h2>
              FROM THE SMALLEST PATCH REPAIR TO THE WHOLE HOUSE RENO, <br /><span
                class="common-text-color"
                >THE PATCH DR.</span
              >
              HAS YOU COVERED.
            </h2>
            <img
              src="/images/About Icon Design.jpg"
              class="about_mobile img-responsive mobile_text"
            />
            <p>
              At The Patch Dr, we never judge a job by it’s size or cover. We view every
              single project as a unique creative challenge, and a chance to be the cure
              to your home improvement headaches.
            </p>
            <p>
              From that accidental hole in your wall, to the fresh new coat of paint, to
              your brand new extension plastering - You name it, and we’re happy to take
              it on. This policy is based on a genuine passion for our work, creative
              problem solving, and the satisfaction of transforming your eyesores into
              art. With years of professional experience, surgical attention to detail,
              and personal service with a smile, look no further for your one-stop home
              improvement needs.
            </p>
            <p>Call or text us today to arrange a no obligation quote.</p>
          </div>
          <div class="col-lg-6 desktop_text">
            <div id="video-box">
              <img src="/images/About Icon Design.jpg" class="img-responsive" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section End -->

    <!-- Call-to-action Section Start -->
    <section id="call-action">
      <div class="call-action-section">
        <div class="container">
          <div class="text-center">
            <h2 class="title">The Home Surgery Specialist.</h2>
          </div>
        </div>
      </div>
    </section>
    <!-- Call-to-action Section End -->
    <section id="sqt">
      <div class="content-section section-sqt">
        <img
          src="/images/TPD_Snap_Text_Quote_Image.jpg"
          class="img-responsive my_mobile"
        />

        <div class="container">
          <div class="col-md-7 col-md-offset-5">
            <h1>
              <span class="light_grey">SNAP, </span
              ><span class="common-text-color">TEXT, </span
              ><span class="grey">QUOTE.</span>
            </h1>
            <p>
              We understand youʼre busy, and frankly, so are we. So weʼve devised a simple
              strategy to make life easier for both of us. Itʼs almost like rocket
              science, for <i>pre-schoolers.</i>
            </p>
            <p>
              Simply <b>SNAP</b> your job on your Smart Phone or Tablet, <b>TEXT</b> the
              photos through to our mobile number, and receive an estimated repair
              <b>QUOTE</b> within a couple of hours. Be also sure to include your name,
              suburb, and any special details or requests.
            </p>
            <p>Because life wasnʼt meant to be complicated.</p>
            <h3 class="phone_number">
              <a href="tel:0422%20782%20198">0422 782 198</a>
            </h3>
          </div>
        </div>
      </div>
    </section>

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
