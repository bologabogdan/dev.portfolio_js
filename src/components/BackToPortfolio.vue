<template>
  <div>
    <div class="w-full bg-purple-600 text-white px-8 py-16 lg:py-16">
      <div class="lg:flex max-w-6xl mx-auto">
        <div class="lg:w-2/3 self-center">
          <h2 class="text-2xl font-bold">{{ $t("portfolio.backTitle") }}</h2>
          <div class="mt-8">
            {{ $t("portfolio.backDescription") }}
          </div>
        </div>

        <div class="lg:w-1/3 self-center lg:text-center mt-12 lg:mt-0">
          <Button
            buttonStyle="white"
            buttonText="portfolio.backButtonText"
            buttonRoute="/portfolio"
          ></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button.vue";

export default {
  components: {
    Button
  },
  methods: {}
};
</script>

<style scoped></style>
