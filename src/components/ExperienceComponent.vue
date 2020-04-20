<template>
  <div class="bg-purple-700 rounded-lg lg:mb-0 shadow" data-aos="fade-up">
    <div class="bg-purple-800 rounded-t-lg p-4">
      <a :href="externalLink" target="_blank"
        ><img
          class="w-2/3 h-2/3 lg:w-3/5 lg:h-3/5 block mx-auto"
          :src="require(`../assets/experience/${image}`)"
      /></a>
    </div>
    <div class="p-8">
      <h3 class="text-md mb-4 text-white text-center opacity-25">
        {{ $t(jobType) }}
      </h3>
      <h3 class="text-md text-white text-center">
        {{ $t(companyName) }}
      </h3>

      <h2 class="text-lg font-bold mb-4 text-white text-center ">
        {{ $t(jobTitle) }}
      </h2>

      <h3 class="text-md text-white text-center opacity-25">
        {{ $t(period) }}
      </h3>
      <h3 class="text-md text-white text-center opacity-25">
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
