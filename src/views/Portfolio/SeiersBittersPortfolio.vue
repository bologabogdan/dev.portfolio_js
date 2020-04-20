<template>
  <div>
    <navigation class="hidden md:block"></navigation>
    <mobile-navigation class="md:hidden"></mobile-navigation>
    <secondary-header
      title="portfolio.seiersBitters.title"
      description="portfolio.seiersBitters.description"
    >
    </secondary-header>
    <gallery :allImages="allImages"></gallery>
    <back></back>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import MobileNavigation from "@/components/Navigation/MobileNavigation.vue";
import SecondaryHeader from "@/components/Header/SecondaryHeader.vue";
import Gallery from "@/components/Gallery.vue";
import Footer from "@/components/Footer.vue";
import Back from "@/components/BackToPortfolio.vue";
export default {
  components: {
    Navigation,
    MobileNavigation,
    SecondaryHeader,
    Gallery,
    Back,
    Footer
  },
  data: function() {
    return {
      allImages: {
        1: {
          imgsArr: [
            require("@/assets/portfolio/seiers-bitters/1.png"),
            require("@/assets/portfolio/seiers-bitters/2.png"),
            require("@/assets/portfolio/seiers-bitters/3.png")
          ],
          index: null
        }
      }
    };
  }
};
</script>
