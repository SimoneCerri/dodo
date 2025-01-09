import { createApp } from 'vue'

/* ### CSS-LINK ### */
import '../style/style.css'

import App from '../../App.vue'

/* ### BOOTSTRAP-LINK ### */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

/* ### FONTAWESOME-LINK ### */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHome, faAnglesDown, faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUser, faHome, faAnglesDown, faChevronCircleDown, faChevronCircleUp);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
