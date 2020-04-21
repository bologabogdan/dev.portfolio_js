<template>
  <div class="w-full bg-white px-8 py-16 lg:py-16">
    <div class="max-w-6xl mx-auto w-full">
      <alert
        class="mt-0 mb-16"
        backgroundColor="bg-orange-300"
        message="alert.galleryInfo"
      ></alert>
      <h2 class="text-2xl font-bold">{{ $t("gallery.title") }}</h2>
      <div class="my-8 lg:w-1/2">
        {{ $t("gallery.description") }}
      </div>

      <gallery
        v-for="(images, i) in allImages"
        :id="`gallery-${i}`"
        :key="`gallery-${i}`"
        :images="images.imgsArr"
        :index="images.index"
        @close="index = null"
      ></gallery>
      <div
        v-for="(images, i) in allImages"
        :key="`images-${i}`"
        class="lg:flex"
      >
        <div
          class="image mb-4 mx-auto lg:m-4 lg:mt-0 lg:mr-0 rounded-lg cursor-pointer bg-gray-100"
          v-for="(image, imageIndex) in images.imgsArr"
          :key="`${i}-${imageIndex}`"
          @click="images.index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image + ')',
            width: '250px',
            height: '200px'
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import Alert from "@/components/UI/Alert.vue";

export default {
  components: {
    Alert,
    gallery: VueGallery
  },
  props: {
    allImages: {
      type: Object
    }
  }
};
</script>

<style scoped>
.image {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.image:hover {
  opacity: 0.5;
}
</style>
