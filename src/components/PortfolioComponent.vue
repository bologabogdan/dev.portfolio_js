<template>
  <div>
    <div
      class="w-full px-8 lg:py-16"
      :class="backgroundStyle"
      :style="{ backgroundType }"
    >
      <div class="lg:flex max-w-6xl mx-auto">
        <div class="lg:w-1/2 self-center lg:text-center pt-16 lg:pt-0">
          <img
            :alt="altText"
            :src="require(`../assets/portfolio/${image}`)"
            class="block mx-auto w-2/3 h-2/3 lg:w-2/4 lg:h-2/4 mb-8 lg:ml-24"
          />
        </div>

        <div class="lg:w-1/2 self-center">
          <h2 class="text-xl font-bold">{{ $t(title) }}</h2>
          <h3 class="text-gray-400 font-bold text-sm">{{ subtitle }}</h3>
          <div class="mt-8 mb-12">
            {{ $t(description) }}
          </div>
          <div class="pb-16 text-center lg:text-left">
            <Button
              buttonStyle="purple-outline"
              :buttonText="$t(buttonText)"
              :buttonRoute="route"
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
    altText: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    backgroundStyle: {
      type: String,
      default: ""
    },
    backgroundType: {
      type: String,
      default: "primary"
    },
    buttonText: {
      type: String,
      default: "See more"
    },
    route: {
      type: String,
      default: ""
    }
  },
  methods: {}
};
</script>

<style scoped>
.primary {
  background: white;
}

.secondary {
  background: #f7fafc;
}

.alternative {
  background: #faf5ff;
}
</style>
