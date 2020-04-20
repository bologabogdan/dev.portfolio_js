<template>
  <div class="nav w-full background-reverse bg-change lg:justify-end xl:pt-32">
    <div class="max-w-6xl mx-auto flex px-8 py-16 md:pt-32 pb-0 xl:p-0">
      <div class="lg:w-2/4 xl:w-1/4 self-center lg:absolute z-30 xl:-mt-16">
        <span class="h-2 w-12 bg-white absolute"></span>
        <h1 class="text-5xl lg:text-6xl font-bold text-white pt-2 pb-4">
          {{ $t("mainHeader.hello") }}
        </h1>
        <p class="text-white">
          {{ $t("mainHeader.helloText") }}
        </p>

        <br />
        <div class="mt-4 mb-16 lg:mb-0">
          <Button
            buttonStyle="white"
            buttonRoute="/portfolio"
            buttonText="mainHeader.helloButton"
          ></Button>
        </div>
      </div>

      <div class="hidden lg:block xl:w-4/4 h-full">
        <img src="../../assets/background.png" alt="Background image" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button.vue";

export default {
  name: "Home",
  components: {
    Button
  }
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .background-reverse {
    flex-direction: column-reverse;
    background: linear-gradient(40deg, #b794f4, #d6bcfa, #9f7aea);
    background-size: 600% 600%;
    -webkit-animation: Animation 5s ease infinite;
    -moz-animation: Animation 5s ease infinite;
    -o-animation: Animation 5s ease infinite;
    animation: Animation 5s ease infinite;
  }
}

.bg-change {
  background: linear-gradient(40deg, #b794f4, #d6bcfa, #9f7aea);
  background-size: 600% 600%;
  -webkit-animation: Animation 10s ease infinite;
  -moz-animation: Animation 10s ease infinite;
  -o-animation: Animation 10s ease infinite;
  animation: Animation 10s ease infinite;
}
@-webkit-keyframes Animation {
  0% {
    background-position: 0% 65%;
  }
  50% {
    background-position: 100% 36%;
  }
  100% {
    background-position: 0% 65%;
  }
}
@-moz-keyframes Animation {
  0% {
    background-position: 0% 65%;
  }
  50% {
    background-position: 100% 36%;
  }
  100% {
    background-position: 0% 65%;
  }
}
@-o-keyframes Animation {
  0% {
    background-position: 0% 65%;
  }
  50% {
    background-position: 100% 36%;
  }
  100% {
    background-position: 0% 65%;
  }
}
@keyframes Animation {
  0% {
    background-position: 0% 65%;
  }
  50% {
    background-position: 100% 36%;
  }
  100% {
    background-position: 0% 65%;
  }
}
</style>
