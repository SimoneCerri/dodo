<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Cookies from './components/Cookies.vue';
import { useHead } from '@vueuse/head';

export default {
  components: {
    Header,
    Main,
    Footer,
    Cookies
  },
  setup() {
    useHead({
      title: 'DODO',
      meta: [
        { name: 'description', content: 'Questo è il sito ufficiale di Dodo, che offre soluzioni create su misura da un team di professionisti per accompagnare, informando, il cliente in un percorso di scelta libera.' },
        { property: 'og:title', content: 'Dodo' },
        { property: 'og:description', content: 'Dodo: soluzioni su misura per accompagnare il cliente in un percorso di scelta libera.' }
      ]
    });
  },
  data() {
    return {

    }
  },
}
</script>

<template>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
  <Cookies></Cookies>
</template>

<style>
#app {
  width: 100vw;
  overflow-x: hidden;
}
</style>
