<template>
  <div>
    <div class="w-full bg-white px-8 py-16 lg:py-16">
      <div class="max-w-6xl mx-auto">
        <div class="bg-white lg:w-fill self-center shadow rounded-lg ">
          <div class="w-full h-full rounded-t-full shadow-inner">
            <img
              alt="Photo of Bogdan Bologa"
              src="../assets/about-bogdan.png"
              class="w-full rounded-t-lg image"
            />
          </div>
          <div class="p-8 pt-16">
            <h2 class="font-bold text-2xl pb-8">{{ $t("about.1.title") }}</h2>
            <p>{{ $t("about.1.text") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  height: fit-content;
  object-fit: cover;
}
</style>
