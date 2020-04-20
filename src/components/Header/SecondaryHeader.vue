<template>
  <div class="nav w-full background-reverse bg-change lg:pt-32 lg:justify-end">
    <div class="max-w-6xl mx-auto pb-16 px-8 pt-12 md:pt-32 lg:pt-0 xl:px-0">
      <span class="h-2 w-10 bg-white absolute"></span>
      <h1 class="text-4xl font-bold text-white py-4">{{ $t(title) }}</h1>
      <h2 class="lg:w-1/2 text-white">{{ $t(description) }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondaryHeader",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
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

.cta-button {
  border: 2px solid white;
}
.cta-button:hover {
  background-color: transparent;
  color: white;
  transition: 0.3s;
  border: 2px solid white;
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
