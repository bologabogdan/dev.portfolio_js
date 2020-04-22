<template>
  <div>
    <div class="w-full bg-gray-100 px-8 py-16 lg:py-16">
      <div class="lg:flex max-w-6xl mx-auto">
        <div class="lg:w-2/3 self-center">
          <img
            alt="Photo of Bogdan Bologa"
            src="../assets/about-bogdan.png"
            class="w-2/3 h:-2/3 rounded-full mx-auto block"
          />
        </div>

        <div
          class="bg-white lg:w-2/3 mt-16 lg:mt-0 self-center shadow p-8 rounded-lg lg:ml-16"
        >
          <h2 class="font-bold text-xl pb-8">{{ $t("about.1.title") }}</h2>
          <p>{{ $t("about.1.text") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
