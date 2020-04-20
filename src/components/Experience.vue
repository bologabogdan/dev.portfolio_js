<template>
  <div class="w-full bg-purple-600 px-8 py-16 lg:py-16">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold pb-8 text-white">
        {{ $t("experience.titleSection") }}
      </h2>
      <div class="lg:flex w-full">
        <experience-component
          class="lg:w-1/3 lg:mr-8 mb-8 lg:mb-0"
          externalLink="https://companyoung.com/"
          image="experience_companyoung.png"
          jobTitle="experience.companyoung.jobTitle"
          jobType="experience.companyoung.jobType"
          companyName="experience.companyoung.companyName"
          period="experience.companyoung.period"
          location="experience.companyoung.location"
        ></experience-component>

        <experience-component
          class="lg:w-1/3 lg:mr-8 mb-8 lg:mb-0"
          externalLink="https://ronaldo.com/"
          image="experience_ronaldo.png"
          jobTitle="experience.ronaldo.jobTitle"
          jobType="experience.ronaldo.jobType"
          companyName="experience.ronaldo.companyName"
          period="experience.ronaldo.period"
          location="experience.ronaldo.location"
        ></experience-component>

        <experience-component
          class="lg:w-1/3"
          externalLink="https://nomorehours.com/"
          image="experience_nomore.png"
          jobTitle="experience.nomore.jobTitle"
          jobType="experience.nomore.jobType"
          companyName="experience.nomore.companyName"
          period="experience.nomore.period"
          location="experience.nomore.location"
        ></experience-component>
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceComponent from "@/components/ExperienceComponent";
export default {
  components: {
    ExperienceComponent
  }
};
</script>
