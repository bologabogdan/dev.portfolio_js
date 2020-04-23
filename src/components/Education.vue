<template>
  <div>
    <div class="w-full bg-gray-100 px-8 py-16 lg:py-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold pb-8">
          {{ $t("education.titleSection") }}
        </h2>

        <div class="w-full lg:flex self-center">
          <education-component
            class="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8"
            title="education.titleWD"
            type="education.typeWD"
            period="education.periodWD"
          ></education-component>
          <education-component
            class="lg:w-1/2"
            title="education.titleMD"
            type="education.typeMD"
            period="education.periodMD"
          ></education-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EducationComponent from "@/components/EducationComponent.vue";

export default {
  components: {
    EducationComponent
  },
  methods: {}
};
</script>
