<template>
  <div>
    <navigation class="hidden md:block"></navigation>
    <mobile-navigation class="md:hidden"></mobile-navigation>
    <secondary-header
      title="portfolio.elMariachi.title"
      description="portfolio.elMariachi.description"
    >
    </secondary-header>
    <portfolio-concept
      title="portfolio.elMariachi.concept.title"
      description="portfolio.elMariachi.concept.description"
      technologies="portfolio.elMariachi.concept.technologies"
      technologiesDescription="portfolio.elMariachi.concept.technologiesDescription"
      source="portfolio.elMariachi.concept.source"
      sourceDescription="portfolio.elMariachi.concept.sourceDescription"
      sourceButtonText="portfolio.elMariachi.concept.sourceButtonText"
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
    PortfolioConcept,
    Back,
    Footer
  },
  data: function() {
    return {
      allImages: {
        1: {
          imgsArr: [
            require("@/assets/portfolio/elmariachi/1.png"),
            require("@/assets/portfolio/elmariachi/2.png"),
            require("@/assets/portfolio/elmariachi/3.png"),
            require("@/assets/portfolio/elmariachi/4.png")
          ],
          index: null
        }
      }
    };
  }
};
</script>
