<template>
  <div>
    <navigation class="hidden md:block"></navigation>
    <mobile-navigation class="md:hidden"></mobile-navigation>
    <secondary-header
      title="portfolio.dizzyapp.title"
      description="portfolio.dizzyapp.description"
    >
    </secondary-header>
    <portfolio-concept
      title="portfolio.dizzyapp.concept.title"
      description="portfolio.dizzyapp.concept.description"
      technologies="portfolio.dizzyapp.concept.technologies"
      technologiesDescription="portfolio.dizzyapp.concept.technologiesDescription"
      source="portfolio.dizzyapp.concept.source"
      sourceDescription="portfolio.dizzyapp.concept.sourceDescription"
      sourceButtonText="portfolio.dizzyapp.concept.sourceButtonText"
    ></portfolio-concept>
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
import PortfolioConcept from "@/components/PortfolioConceptComponent.vue";
import Back from "@/components/BackToPortfolio.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navigation,
    MobileNavigation,
    SecondaryHeader,
    Gallery,
    Back,
    PortfolioConcept,
    Footer
  },
  data: function() {
    return {
      allImages: {
        1: {
          imgsArr: [
            require("@/assets/portfolio/dizzyapp/1.png"),
            require("@/assets/portfolio/dizzyapp/2.png"),
            require("@/assets/portfolio/dizzyapp/3.png")
          ],
          index: null
        }
      }
    };
  }
};
</script>
