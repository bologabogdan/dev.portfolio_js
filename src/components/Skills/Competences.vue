<template>
  <div>
    <div class="w-full bg-purple-600 px-8 py-16 lg:py-16">
      <div class="max-w-6xl mx-auto">
        <div class="self-center">
          <h2 class="text-2xl font-bold pb-8 text-white">
            {{ $t("skills.title") }}
          </h2>
        </div>
        <div class="lg:flex">
          <div class="lg:mr-4 lg:w-3/5" data-aos="fade-up">
            <web-dev></web-dev>
          </div>
          <div class="lg:ml-4 lg:w-2/5" data-aos="fade-up">
            <design class="mt-8 lg:mt-0"></design>
            <more-work class="mt-8"></more-work>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Design from "@/components/Skills/DesignSkills.vue";
import WebDev from "@/components/Skills/WebDevelopmentSkills.vue";
import MoreWork from "@/components/Skills/WorkSkills.vue";
export default {
  name: "Home",
  components: {
    Design,
    WebDev,
    MoreWork
  }
};
</script>
