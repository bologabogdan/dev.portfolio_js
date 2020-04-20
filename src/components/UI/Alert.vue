<template>
  <div
    :class="backgroundColor"
    class="px-8 py-4 rounded-lg my-8 text-white"
    id="alert"
  >
    <div class="flex">
      <div class="w-11/12 lg:flex">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="info-circle"
          class="svg-inline--fa fa-info-circle w-6 h-6 fill-current mr-6 self-center hidden lg:block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
          ></path>
        </svg>
        <div class="w-11/12">
          {{ $t(message) }}
        </div>
      </div>
      <div class="w-1/12 lg:flex self-center justify-end" @click="closeAlert">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times-circle"
          class="svg-inline--fa fa-times-circle  w-6 h-6 fill-current cursor-pointer"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    backgroundColor: {
      type: String,
      default: "bg-orange-300"
    },
    message: {
      type: String,
      default: ""
    }
  },
  methods: {
    closeAlert() {
      let section = document.getElementById("alert");
      if (section.style.display === "none") {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    }
  }
};
</script>
