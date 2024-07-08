import './css/bootstrap.min.css';
import './css/animate.css';
import './css/prettyPhoto.css';
import './css/custom.css';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

// Smooth Scrolling -----------------------------------------------------------
const $ = (window as any).$;

$('a.page-scroll').bind('click', function (this: any, event: any) {
    const scrollTop = $($(this).attr('href')).offset().top;

    $('html, body').stop().animate({ scrollTop }, 1500, 'easeInOutExpo');

    event.preventDefault();
});
