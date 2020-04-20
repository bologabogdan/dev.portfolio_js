<template>
  <div class="w-full bg-gray-100  px-8 py-16 lg:py-16">
    <div class="max-w-6xl mx-auto lg:flex">
      <div class="lg:w-1/2" data-aos="fade-up">
        <div class="bg-white rounded-lg  lg:mr-8 mb-8 lg:mb-0 shadow">
          <div class="bg-purple-400 text-white p-4 pl-8 rounded-t-lg">
            <h2 class="font-bold text-xl">{{ $t(title) }}</h2>
          </div>
          <p class="p-8">
            {{ $t(description) }}
          </p>
        </div>
      </div>
      <div class="lg:w-1/2" data-aos="fade-up">
        <div class="bg-white rounded-lg shadow">
          <div class="bg-purple-400 p-4 text-white  pl-8 rounded-t-lg">
            <h2 class="font-bold text-xl">{{ $t(technologies) }}</h2>
          </div>
          <p class="p-8">
            {{ $t(technologiesDescription) }}
          </p>
          <div class="p-8 pt-2">
            <Button
              class="pb-4"
              buttonStyle="purple"
              :buttonText="sourceButtonText"
              buttonRoute="/github"
            ></Button>
          </div>
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
  props: {
    iconImage: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    technologies: {
      type: String,
      default: ""
    },
    technologiesDescription: {
      type: String,
      default: ""
    },
    source: {
      type: String,
      default: ""
    },
    sourceDescription: {
      type: String,
      default: ""
    },
    sourceButtonText: {
      type: String,
      default: ""
    }
  }
};
</script>
