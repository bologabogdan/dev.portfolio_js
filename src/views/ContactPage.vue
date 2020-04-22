<template>
  <div class="bg-gray-100">
    <navigation class="hidden md:block"></navigation>
    <mobile-navigation class="md:hidden"></mobile-navigation>
    <secondary-header
      title="contact.title"
      description="contact.description"
    ></secondary-header>
    <div class="p-8 pb-0">
      <alert
        backgroundColor="bg-green-400"
        message="alert.available"
        class="max-w-6xl mx-auto mb-0"
      ></alert>
    </div>
    <div class="lg:flex max-w-6xl mx-auto bg-gray-100 p-8 lg:p-0">
      <contact-mail class=""></contact-mail>
      <contact-phone class=""></contact-phone>
    </div>
    <social></social>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import MobileNavigation from "@/components/Navigation/MobileNavigation.vue";
import SecondaryHeader from "@/components/Header/SecondaryHeader.vue";
import ContactMail from "@/components/Contact/ContactMail.vue";
import ContactPhone from "@/components/Contact/ContactPhone.vue";
import Alert from "@/components/UI/Alert.vue";
import Social from "@/components/Social.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contact",
  components: {
    Navigation,
    MobileNavigation,
    SecondaryHeader,
    ContactMail,
    ContactPhone,
    Social,
    Alert,
    Footer
  },
  props: {}
};
</script>
