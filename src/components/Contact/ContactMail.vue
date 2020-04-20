<template>
  <div
    class="px-8 py-16 bg-white lg:w-1/2 rounded-lg shadow lg:my-16 lg:mr-4"
    data-aos="fade-up"
  >
    <div class="max-w-6xl mx-auto">
      <div class="self-center">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="envelope-open-text"
          class="svg-inline--fa fa-envelope-open-text w-12 h-12 fill-current text-purple-400 mb-8 mx-auto"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"
          ></path>
        </svg>
        <h2 class="text-2xl font-bold text-center">
          {{ $t("contact.mailTitle") }}
        </h2>
        <div class="mt-8 lg:mx-auto text-center lg:w-2/3">
          {{ $t("contact.mailDescription") }}
        </div>
      </div>

      <div class="mx-auto self-center text-center mt-12">
        <Button
          buttonStyle="purple"
          buttonText="contact.mailButtonText"
          buttonRoute="/mail-me"
        ></Button>
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
