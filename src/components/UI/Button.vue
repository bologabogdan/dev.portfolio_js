<template>
  <div>
    <router-link
      :to="buttonRoute"
      class="rounded-full p-4 font-bold button"
      :class="buttonStyle"
      :style="{ buttonType }"
      >{{ $t(buttonText) }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonStyle: {
      type: String,
      default: ""
    },
    buttonType: {
      type: String,
      default: "primary"
    },
    buttonText: {
      type: String,
      default: ""
    },
    buttonRoute: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style scoped>
.button {
  outline: none;
}

.white {
  border: 2px solid white;
  background-color: white;
  color: #b794f4;
  transition: 0.3s;
}
.white:hover {
  background-color: transparent;
  color: white;
  transition: 0.3s;
  border: 2px solid white;
}

.purple {
  border: 2px solid #b794f4;
  transition: 0.3s;
  background-color: #b794f4;
  color: white;
}

.purple:hover {
  border: 2px solid #b794f4;
  color: #b794f4;
  background: transparent;
}

.white-outline {
  border: 2px solid white;
  transition: 0.3s;
  background: transparent;
  color: white;
}

.white-outline:hover {
  border: 2px solid white;
  color: #3c366b;
  background: white;
}

.purple-outline {
  border: 2px solid #b794f4;
  transition: 0.3s;
  background: transparent;
  color: #b794f4;
}

.purple-outline:hover {
  border: 2px solid #b794f4;
  color: white;
  background: #b794f4;
}
</style>
