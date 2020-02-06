<template>
  <div class="wrapper">
    <transition name="fade">
      <NavBar v-if="isOpen" @burger="isOpen = !isOpen" :isOpen="isOpen" />
    </transition>
    <div class="content">
      <header>
        <div class="header">
          <Logo @burger="isOpen = !isOpen" :isOpen="isOpen" />
          <Advantages />
        </div>
      </header>
      <main>
        <Opportunities v-scroll="170" />
        <Surprises v-scroll="950" />
        <Assistant v-scroll="1850" />
        <Checkout v-scroll="2450" />
      </main>
      <Footer v-scroll="2600" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style.scss";
</style>

<script>
import NavBar from "@/components/UI/NavBar/NavBar.vue";
import Logo from "@/components/UI/Logo/Logo.vue";
import Advantages from "@/components/Blocks/Advantages/Advantages.vue";
import Opportunities from "@/components/Blocks/Opportunities/Opportunities.vue";
import Surprises from "@/components/Blocks/Surprises/Surprises.vue";
import Assistant from "@/components/Blocks/Assistant/Assistant.vue";
import Checkout from "@/components/Blocks/Checkout/Checkout.vue";
import Footer from "@/components/Blocks/Footer/Footer.vue";

export default {
  name: "home",
  components: {
    Logo,
    NavBar,
    Advantages,
    Opportunities,
    Surprises,
    Assistant,
    Checkout,
    Footer
  },
  data() {
    return { isOpen: false };
  },
  methods: {
    handleScroll: function(evt, el) {
      if (window.scrollY > 500) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
      }
      return window.scrollY > 1000;
    }
  }
};
</script>
