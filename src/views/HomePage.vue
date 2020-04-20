<template>
  <div>
    <navigation class="hidden md:block"></navigation>
    <mobile-navigation class="md:hidden"></mobile-navigation>
    <main-header></main-header>

    <brief-introduction></brief-introduction>
    <competences></competences>
    <portfolio-home-overview></portfolio-home-overview>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import MobileNavigation from "@/components/Navigation/MobileNavigation.vue";
import MainHeader from "@/components/Header/MainHeader.vue";
import BriefIntroduction from "@/components/Introduction.vue";
import Competences from "@/components/Skills/Competences.vue";
import Footer from "@/components/Footer.vue";
import PortfolioHomeOverview from "@/components/PortfolioHomeOverview.vue";

export default {
  name: "Home",
  components: {
    Navigation,
    MobileNavigation,
    MainHeader,
    BriefIntroduction,
    Competences,
    PortfolioHomeOverview,
    Footer
  },
  props: {}
};
</script>

<style scoped></style>
