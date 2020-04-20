<template>
  <div>
    <navigation class="hidden md:block"></navigation>
    <mobile-navigation class="md:hidden"></mobile-navigation>
    <secondary-header
      title="portfolio.companyoung.title"
      description="portfolio.companyoung.description"
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
import Back from "@/components/BackToPortfolio.vue";
import Footer from "@/components/Footer.vue";
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
            require("@/assets/portfolio/companyoung/1.png"),
            require("@/assets/portfolio/companyoung/2.png"),
            require("@/assets/portfolio/companyoung/3.png"),
            require("@/assets/portfolio/companyoung/4.png")
          ],
          index: null
        },
        2: {
          imgsArr: [
            require("@/assets/portfolio/companyoung/5.png"),
            require("@/assets/portfolio/companyoung/6.png"),
            require("@/assets/portfolio/companyoung/7.png"),
            require("@/assets/portfolio/companyoung/8.png")
          ],
          index: null
        },
        3: {
          imgsArr: [
            require("@/assets/portfolio/companyoung/9.png"),
            require("@/assets/portfolio/companyoung/10.png"),
            require("@/assets/portfolio/companyoung/11.png"),
            require("@/assets/portfolio/companyoung/12.png")
          ],
          index: null
        }
      }
    };
  }
};
</script>
