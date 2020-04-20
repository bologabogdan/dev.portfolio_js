<template>
  <div class="bg-white rounded-lg lg:mb-0 shadow" data-aos="fade-up">
    <div class="p-8">
      <h3 class="text-md mb-4 text-center text-gray-400">
        {{ $t(jobType) }}
      </h3>
      <h3 class="text-md text-center">
        {{ $t(companyName) }}
      </h3>

      <h2 class="text-lg font-bold mb-4 text-center ">
        {{ $t(jobTitle) }}
      </h2>

      <h3 class="text-md text-center text-gray-400">
        {{ $t(period) }}
      </h3>
      <h3 class="text-md text-center text-gray-400">
        {{ $t(location) }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    jobTitle: {
      type: String,
      default: ""
    },
    jobType: {
      type: String,
      default: ""
    },
    companyName: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    period: {
      type: String,
      defaut: ""
    },
    location: {
      type: String,
      default: ""
    },
    externalLink: {
      type: String,
      defaul: ""
    }
  }
};
</script>
