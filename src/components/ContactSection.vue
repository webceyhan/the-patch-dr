<script setup lang="ts">
import FaIcon from "./FaIcon.vue";

interface Link {
  label?: string;
  icon?: string;
  href?: string;
  value?: string;
}

const CONTACT_LINKS: Link[] = [
  {
    icon: "location-dot",
    label: "Location",
    value: "Melbourne, Australia",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "0422 782 198",
  },
  {
    icon: "envelope",
    label: "Email",
    href: "mailto:jobs@thepatchdr.com.au",
    value: "jobs@thepatchdr.com.au",
  },
  {
    icon: "globe",
    label: "Website",
    href: "http://www.thepatchdr.com.au/",
    value: "www.thepatchdr.com.au",
  },
];

const SOCIAL_LINKS: Link[] = [
  {
    icon: "facebook",
    href: "https://www.facebook.com/thepatchdr",
  },
  {
    icon: "tiktok",
    href: "https://www.tiktok.com/@thepatchdr",
  },
  {
    icon: "hipages",
    href: "https://www.hipages.com.au/thepatchdr",
  },
  {
    icon: "yellowpages",
    href:
      "https://www.yellowpages.com.au/vic/fitzroy/the-patch-dr-1000001742637-listing.html",
  },
];
</script>

<template>
  <section>
    <div class="content-section parallax">
      <div class="container">
        <div class="text-center">
          <h2 class="title">Get In Touch</h2>

          <h4 class="text-primary">
            Connect with us via email or phone, or check out our online profiles
          </h4>
        </div>
      </div>

      <div class="container">
        <div class="col-12">
          <div class="contact-info">
            <ul class="address">
              <li v-for="link in CONTACT_LINKS">
                <FaIcon :name="link.icon!" />
                <label> {{ link.label }}:</label>

                <a v-if="link.href" :href="link.href" target="_blank">
                  {{ link.value }}
                </a>

                <span v-else> {{ link.value }} </span>
              </li>
            </ul>

            <!-- social links -->
            <ul class="menu follow">
              <li v-for="link in SOCIAL_LINKS">
                <a :href="link.href" target="_blank">
                  <img class="normal" :src="`/images/social/${link.icon}.png`" />
                  <img class="rollover" :src="`/images/social/${link.icon}-hover.png`" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  padding-top: 80px;
  width: 100%;
  color: #fff;
  background: url(/images/contact-section-bg.jpg) center center no-repeat #000;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.content-section .title {
  margin-bottom: 10px;
}
.content-section h4 {
  margin-bottom: 20px;
  font-weight: 500;
}

.contact-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.contact-info ul li {
  margin-bottom: 8px;
}
@media (max-width: 767px) {
  .contact-info {
    padding-top: 20px;
    padding-left: 0px;
  }
}

.address {
  list-style: none;
}
.address li {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.address label {
  font-weight: normal;
}

.follow {
  margin: 3px 0 36px;
  padding-left: 0;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
}
.follow li {
  list-style: none;
}
.follow a .normal,
.follow a .rollover,
.follow a:hover .normal,
.follow a:hover .rollover {
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s;
}
.follow a .normal {
  opacity: 1;
  position: absolute;
}
.follow a:hover .normal,
.follow a .rollover {
  opacity: 0;
}
.follow a:hover .rollover {
  opacity: 1;
}
.follow a img {
  width: 50px;
}

@media (max-width: 436px) {
  .content-section {
    padding-top: 60px;
  }

  .content-section {
    background: url(/images/contact-section-bg-mobile.jpg) center center no-repeat #000;
  }
}
</style>
