<template>
  <section>
    <header>
      <div class="container">
        <div class="text-center">
          <h2 class="title">The Home Surgery Specialist.</h2>
        </div>
      </div>
    </header>

    <div class="content-section">
      <img src="/images/call-action-section-bg.jpg" class="img-responsive my_mobile" />

      <div class="container">
        <div class="col-md-7 col-md-offset-5">
          <h1>
            <span class="light_grey">SNAP, </span
            ><span class="text-primary">TEXT, </span><span class="grey">QUOTE.</span>
          </h1>

          <p>
            We understand youʼre busy, and frankly, so are we. So weʼve devised a simple
            strategy to make life easier for both of us. Itʼs almost like rocket science,
            for <i>pre-schoolers.</i>
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
</template>

<style scoped>
header {
  width: 100%;
  color: #fff;
  padding: 15px 0 8px;
  background-color: #eb5e54;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
header .title {
  text-transform: none;
  font-weight: 100 !important;
  letter-spacing: -0.5px;
  font-size: 38px;
  text-shadow: none;
}

@media (max-width: 436px) {
  header .title {
    font-size: 33px;
  }
}

.content-section {
  color: #5e5f5f;
  background: url(/images/call-action-section-bg.jpg) no-repeat bottom left;
  background-size: 38%;
}
.content-section h1 {
  margin-top: -5px;
  font-size: 65px;
  margin-bottom: 27px;
  letter-spacing: -3px;
}
.content-section p {
  font-size: 16px;
  line-height: 1.3;
}
.content-section .phone_number {
  font-size: 58px;
  margin-bottom: 40px;
  font-weight: 300;
  margin-top: 31px;
}
.content-section a {
  color: #888888;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s;
}
.content-section a:hover {
  color: #eb5e54;
}

@media (max-width: 436px) {
  .content-section {
    padding-top: 20px;
  }
  .content-section .phone_number {
    font-size: 43px;
  }
}

@media (max-width: 767px) {
  .content-section {
    background: none !important;
  }
}

@media (min-width: 992px) {
  .content-section .col-md-offset-5 {
    margin-left: 38.666667%;
  }
}

.my_mobile {
  display: none;
}
@media (max-width: 767px) {
  .my_mobile {
    display: block;
    margin-bottom: 40px;
    width: 100%;
  }
}
</style>
