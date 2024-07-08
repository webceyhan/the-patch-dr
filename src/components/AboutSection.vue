<template>
  <section>
    <div class="content-section parallax">
      <div class="container">
        <div class="col-lg-6">
          <h2>
            FROM THE SMALLEST PATCH REPAIR TO THE WHOLE HOUSE RENO,
            <br />
            <span class="text-primary">THE PATCH DR. </span>
            HAS YOU COVERED.
          </h2>

          <img
            src="/images/about-section-highlights.jpg"
            class="about_mobile img-responsive mobile_text"
          />

          <p>
            At The Patch Dr, we never judge a job by it’s size or cover. We view every
            single project as a unique creative challenge, and a chance to be the cure to
            your home improvement headaches.
          </p>

          <p>
            From that accidental hole in your wall, to the fresh new coat of paint, to
            your brand new extension plastering - You name it, and we’re happy to take it
            on. This policy is based on a genuine passion for our work, creative problem
            solving, and the satisfaction of transforming your eyesores into art. With
            years of professional experience, surgical attention to detail, and personal
            service with a smile, look no further for your one-stop home improvement
            needs.
          </p>

          <p>Call or text us today to arrange a no obligation quote.</p>
        </div>

        <div class="col-lg-6 desktop_text">
          <div class="video-box">
            <img src="/images/about-section-highlights.jpg" class="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  padding-bottom: 60px;
  padding-top: 80px;
  width: 100%;
  color: #fff;
  background: url(/images/about-section-bg.jpg) center center no-repeat #000;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.content-section p {
  color: #fff;
  font-weight: 300;
  line-height: 1.55;
  padding-right: 28px;
}

.content-section h2 {
  font-size: 30px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 20px;
}

.video-box {
  padding: 6px 3px;
  margin-bottom: 20px;
}

@media (max-width: 436px) {
  .content-section {
    background: url(/images/about-section-bg-mobile.jpg) no-repeat #000000;
  }

  .about_mobile {
    margin-bottom: 25px;
    margin-top: 25px;
  }
}

@media (max-width: 767px) {
  .content-section p {
    padding-right: 0;
  }

  .video-box {
    padding: 0 !important;
    margin-top: 35px;
  }
}
</style>
