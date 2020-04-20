<template>
  <div
    class="px-8 py-16 bg-white lg:w-1/2 rounded-lg shadow mt-8 lg:my-16 lg:ml-4"
    data-aos="fade-up"
  >
    <div class="max-w-6xl mx-auto">
      <div class="mx-auto self-center">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="mobile-alt"
          class="svg-inline--fa fa-mobile-alt h-12 w-12 fill-current text-purple-400 mx-auto mb-8"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
          ></path>
        </svg>
        <h2 class="text-2xl font-bold text-center">
          {{ $t("contact.phoneTitle") }}
        </h2>
        <div class="mt-8 lg:mx-auto text-center lg:w-2/3">
          {{ $t("contact.phoneDescription") }}
        </div>
      </div>

      <div class="mx-auto self-center text-center mt-12">
        <Button
          buttonStyle="purple"
          buttonText="contact.phoneButtonText"
          buttonRoute="/call-me"
        >
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/UI/Button.vue";
export default {
  components: {
    Button
  },
  methods: {}
};
</script>

<style scoped></style>
