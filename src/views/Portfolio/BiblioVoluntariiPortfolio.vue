<template>
  <div>
    <navigation class="hidden md:block"></navigation>
    <mobile-navigation class="md:hidden"></mobile-navigation>
    <secondary-header
      title="portfolio.biblioVoluntarii.title"
      description="portfolio.biblioVoluntarii.description"
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
            require("@/assets/portfolio/bibliovoluntarii/1.jpg"),
            require("@/assets/portfolio/bibliovoluntarii/2.jpg"),
            require("@/assets/portfolio/bibliovoluntarii/3.jpg"),
            require("@/assets/portfolio/bibliovoluntarii/4.jpg")
          ],
          index: null
        }
      }
    };
  }
};
</script>
