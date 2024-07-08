<script setup lang="ts">
import { onMounted } from "vue";
import FaIcon from "./FaIcon.vue";

interface Link {
  href: string;
  title: string;
}

const LINKS: Link[] = [
  { href: "#page-top", title: "hidden" },
  { href: "#service", title: "Snapshot" },
  { href: "#about", title: "About" },
  { href: "#call-action", title: "STQ" },
  { href: "#features", title: "Services" },
  { href: "#portfolio", title: "Gallery" },
  { href: "#testimonials", title: "Testimonials" },
  { href: "#contact", title: "Connect" },
];

onMounted(() => {
  const $ = (window as any).$;

  // Mobile Menu
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // Closes the Responsive Menu on Menu Item Click
  $(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click();
  });
});
</script>

<template>
  <nav class="navbar navbar-fixed-top" role="navigation">
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
        <a class="navbar-brand" href="#page-top">
          <img src="/images/logo-navbar-dark.png" class="black_logo" />
          <img src="/images/logo-navbar.png" class="white_logo" />
        </a>
      </div>

      <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
        <ul class="nav navbar-nav">
          <li v-for="(link, index) in LINKS" :class="{ hidden: index === 0 }">
            <a :href="link.href">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  margin-bottom: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  background-color: #ffffff;
}
.navbar-brand {
  color: #fff;
  font-size: 35px;
  font-weight: 700;
  line-height: 0;
  text-transform: uppercase;
  float: left;
  height: 50px;
  padding: 0;
  transition: all 0.4s ease 0s;
}
.navbar-brand:focus {
  outline: 0;
}
.navbar-brand .navbar-toggle {
  padding: 4px 6px;
  font-size: 16px;
  color: #fff;
}
.navbar-brand .navbar-toggle:active,
.navbar-brand .navbar-toggle:focus {
  outline: 0;
}

.navbar-toggle {
  background-color: transparent;
  box-shadow: none;
  border: 1px solid #ccc;
  color: #ccc;
  margin-top: 10px;
  margin-bottom: 9px;
  margin-right: 10px;
}

.navbar-nav > li > a {
  padding: 15px 8px;
}

.top-nav-collapse a.navbar-brand {
  padding: 6px 0 0;
}

.navbar-nav a {
  color: #a8a8a8;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
}

.navbar-nav li + li {
  margin-left: 0;
  padding-left: 5px;
}
.navbar-nav li:first-child,
.navbar-nav li:nth-child(2) {
  background: 0 0;
}
.navbar-nav li.active {
  outline: none;
  background-color: transparent;
}
.navbar-nav li a {
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;
}
.navbar-nav li a:focus,
.navbar-nav li.active a {
  outline: 0;
  background: 0 0;
  color: #eb5e54;
}
.navbar-nav li a:hover {
  outline: 0;
  background: 0 0;
  color: white;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s;
}

.navbar-fixed-bottom .navbar-collapse,
.navbar-fixed-top .navbar-collapse {
  max-height: 375px;
}

.navbar-brand .black_logo {
  opacity: 1;
  width: 200px;
  margin-top: 5px;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -ms-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  transition: all ease 0.3s;
  position: absolute;
}
.navbar-brand .white_logo {
  opacity: 0;
  width: 200px;
  margin-top: -5px;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -ms-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.navbar.top-nav-collapse a.navbar-brand .black_logo {
  opacity: 0;
}
.navbar.top-nav-collapse a.navbar-brand .white_logo {
  opacity: 1;
}

@media (min-width: 767px) {
  .navbar {
    padding: 20px 0;
    border-bottom: 0;
    letter-spacing: 0px;
    background: 0 0;
    -webkit-transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
    -moz-transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
    transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
  }
  .top-nav-collapse {
    padding: 10px 0;
    background-color: rgb(255 255 255 / 97%);
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
  }
  .top-nav-collapse .navbar-brand {
    color: #2f2f2f;
    text-shadow: 1px 1px 2px #b0b0b0;
  }
  .top-nav-collapse .nav li a {
    color: #a8a8a8;
  }
  .top-nav-collapse .nav li a:hover {
    color: #5e5f5f;
  }
  .top-nav-collapse {
    border-bottom: 1px solid transparent;
  }
}

@media (min-width: 767px) and (max-width: 991px) {
  .navbar-brand {
    font-size: 25px;
    transition: all 0.2s ease-in-out;
  }
  .navbar-nav li + li {
    background: 0 0;
    margin-left: 0;
    padding-left: 0;
  }
  .navbar-nav a {
    font-size: 14px;
  }
  .navbar-nav > li > a {
    padding: 15px 5px;
  }
}

@media (max-width: 767px) {
  .navbar-brand {
    padding-left: 15px;
    padding-top: 8px;
  }
  .navbar-brand .black_logo {
    opacity: 0;
  }
  .navbar-brand .white_logo {
    opacity: 1;
    width: 200px;
  }

  .navbar-collapse {
    border-top: 0;
    box-shadow: 0;
  }
  .navbar-collapse .nav li + li {
    background: 0 0;
    margin-left: 0;
    padding-left: 0;
  }
  .navbar-collapse .nav li a {
    border-bottom: 1px solid #252525;
  }
  .navbar-collapse .nav li:last-child a {
    border-bottom: 0;
  }

  .top-nav-collapse {
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
  }
  .top-nav-collapse .navbar-brand {
    padding: 8px 0 4px 15px;
  }
  .top-nav-collapse .navbar-brand .black_logo {
    opacity: 0 !important;
  }
  .top-nav-collapse .navbar-brand .white_logo {
    opacity: 1 !important;
  }
}
</style>
