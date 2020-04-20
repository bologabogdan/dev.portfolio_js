<template>
  <div>
    <navigation class="hidden md:block"></navigation>
    <mobile-navigation class="md:hidden"></mobile-navigation>
    <secondary-header
      title="about.title"
      description="about.description"
    ></secondary-header>
    <education></education>
    <experience></experience>
    <other-experience></other-experience>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import MobileNavigation from "@/components/Navigation/MobileNavigation.vue";
import SecondaryHeader from "@/components/Header/SecondaryHeader.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import OtherExperience from "@/components/OtherExperience.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    Navigation,
    MobileNavigation,
    SecondaryHeader,
    Education,
    Experience,
    OtherExperience,
    Footer
  },
  props: {}
};
</script>
