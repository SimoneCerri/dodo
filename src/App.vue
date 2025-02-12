<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Cookies from './components/Cookies.vue';

export default {
  components: {
    Header,
    Main,
    Footer,
    Cookies
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
