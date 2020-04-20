<template>
  <div class="w-full bg-gray-100 px-8 py-16 lg:py-16">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold pb-8">
        {{ $t("experience.otherExperienceTitle") }}
      </h2>
      <div class="lg:flex w-full">
        <other-experience-component
          class="lg:w-1/3 lg:mr-8 mb-8 lg:mb-0"
          jobTitle="experience.elmariachi.jobTitle"
          jobType="experience.elmariachi.jobType"
          companyName="experience.elmariachi.companyName"
          period="experience.elmariachi.period"
          location="experience.elmariachi.location"
        ></other-experience-component>

        <other-experience-component
          class="lg:w-1/3 lg:mr-8 mb-8 lg:mb-0"
          jobTitle="experience.andreiDistribution.jobTitle"
          jobType="experience.andreiDistribution.jobType"
          companyName="experience.andreiDistribution.companyName"
          period="experience.andreiDistribution.period"
          location="experience.andreiDistribution.location"
        ></other-experience-component>

        <other-experience-component
          class="lg:w-1/3"
          jobTitle="experience.bibliotecaMedgidia.jobTitle"
          jobType="experience.bibliotecaMedgidia.jobType"
          companyName="experience.bibliotecaMedgidia.companyName"
          period="experience.bibliotecaMedgidia.period"
          location="experience.bibliotecaMedgidia.location"
        ></other-experience-component>
      </div>
    </div>
  </div>
</template>

<script>
import OtherExperienceComponent from "@/components/OtherExperienceComponent.vue";
export default {
  components: {
    OtherExperienceComponent
  }
};
</script>
