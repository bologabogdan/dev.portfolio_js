<template>
  <div>
    <navigation class="hidden md:block"></navigation>
    <mobile-navigation class="md:hidden"></mobile-navigation>
    <secondary-header
      title="portfolio.title"
      description="portfolio.description"
    ></secondary-header>
    <portfolio-overview></portfolio-overview>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import MobileNavigation from "@/components/Navigation/MobileNavigation.vue";
import SecondaryHeader from "@/components/Header/SecondaryHeader.vue";
import Footer from "@/components/Footer.vue";
import PortfolioOverview from "@/components/PortfolioOverview.vue";

export default {
  name: "Portfolio",
  components: {
    Navigation,
    MobileNavigation,
    SecondaryHeader,
    PortfolioOverview,
    Footer
  },
  props: {}
};
</script>
