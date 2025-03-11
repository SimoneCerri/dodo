import { createApp } from 'vue'

/* ### VUE META ### */
import { createHead } from '@vueuse/head';

/* ### CSS-LINK ### */
import '../style/style.css'

import App from '../../App.vue'

/* ### BOOTSTRAP-LINK ### */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

/* ### FONTAWESOME-LINK ### */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHome, faAnglesDown, faChevronCircleDown, faChevronCircleUp, faChevronLeft, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUser, faHome, faAnglesDown, faChevronCircleDown, faChevronCircleUp, faFacebook, faInstagram, faChevronLeft, faChevronRight, faChevronUp);

const head = createHead();

createApp(App)
    .use(head)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
