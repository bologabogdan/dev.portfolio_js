<template>
  <div class="bg-white p-8 rounded-lg">
    <h2 class="font-bold pb-4 text-xl">
      {{ $t("skills.titleWork") }}
    </h2>
    <p class="pb-8">
      {{ $t("skills.descriptionWork") }}
    </p>

    <Button
      class="mb-4"
      buttonStyle="purple"
      buttonText="skills.buttonText"
      buttonRoute="/portfolio"
    ></Button>
  </div>
</template>

<script>
import Button from "@/components/UI/Button.vue";
export default {
  components: {
    Button
  }
};
</script>
