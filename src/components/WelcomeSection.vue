<template>
  <section>
    <header class="welcome">
      <div class="welcome-body">
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <h1 class="brand-heading">
                SURGERY<span class="friction">,</span> FOR
                <span class="text-primary">SPACES.</span>
              </h1>

              <p class="welcome-text">
                Combining quality, price, and friendly customer service, we offer one of
                the best property improvement services in Melbourne. Read our
                testimonials, and get in touch with us for a free quote today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="phone_body text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <a href="tel:%200422%20782%20198">
              <i>
                <img class="static" src="/images/social/phone.png" />
                <img class="rollover" src="/images/social/phone-hover.png" />
              </i>
              0422 782 198
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: auto;
}

.welcome {
  display: table;
  width: 100%;
  height: auto;
  padding: 100px 0;
  text-align: center;
  color: #fff;
  background: url(/images/welcome-section-bg.jpg) top center no-repeat #000;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.welcome-body {
  display: table-cell;
  vertical-align: middle;
}
.welcome-body .brand-heading {
  font-size: 42px;
  margin-bottom: 25px;
}
.welcome-body .welcome-text {
  font-size: 18px;
}

.phone_body {
  margin-top: -80px;
}
.phone_body a {
  color: #ffffff;
  font-size: 40px;
  vertical-align: top;
  line-height: 33px;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s;
}
.phone_body a:hover {
  color: #eb5e54;
}
.phone_body a:hover i {
  color: #eb5e54;
}
.phone_body a img {
  width: 33px;
  margin-right: 7px;
}
.phone_body a img.static {
  opacity: 1;
  position: absolute;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -ms-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.phone_body a img.rollover {
  opacity: 0;
  margin-top: -8px;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -ms-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.phone_body a:hover img.static {
  opacity: 0;
}
.phone_body a:hover img.rollover {
  opacity: 1;
}

@media (max-width: 767px) {
  .phone_body a {
    font-size: 30px;
    line-height: 27px;
  }
  .phone_body a img {
    width: 25px !important;
  }
}

@media (min-width: 767px) {
  section,
  .welcome {
    height: 100%;
    padding: 0;
  }
  .welcome-body .brand-heading {
    margin: 0 auto 3px;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.18);
    letter-spacing: -0.5px;
  }
  .welcome-body .welcome-text {
    font-size: 18px;
    margin-bottom: 50px;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.28);
  }
}
</style>
