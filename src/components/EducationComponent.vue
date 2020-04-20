<template>
  <div>
    <div class="bg-white p-8 rounded-lg shadow" data-aos="fade-up">
      <div>
        <a href="https://www.ucn.dk/english" target="_blank"
          ><img
            class="w-1/3 h-1/3 mx-auto block mb-12  mt-8 md:mt-0 md:mx-0 md:w-1/6 md:h-1/6 md:mb-4 md:float-right"
            src="../assets/ucn.png"
            alt=""
        /></a>
        <h3 class="text-md text-gray-400 font-bold">
          {{ $t(type) }}
        </h3>
        <h2 class="text-lg font-bold">{{ $t(title) }}</h2>
        <h3 class="text-md text-gray-400 italic  mt-4">
          {{ $t("education.name") }}
        </h3>
        <h3 class="text-md text-gray-400 italic">
          {{ $t(period) }}
        </h3>
        <h3 class="text-md text-gray-400 italic">
          {{ $t("education.location") }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    period: {
      type: String,
      defaut: ""
    }
  }
};
</script>
