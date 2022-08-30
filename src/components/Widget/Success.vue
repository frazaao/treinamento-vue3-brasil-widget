<template>
  <div class="flex flex-col items-center justify-center w-full my-5">
    <Icon name="Check" size="60" color="seagreen" />
    <p class="text-xl font-black text-center w-full mt-2">
      Obrigado! Recebemos o seu feedback.
    </p>
    <button
      @click="goBack"
      class="mt-2 rounded-full font-regular text-xs flex flex-col justify-center bg-brand-gray border border-brand-graydark items-center py-2 px-5 cursor-pointer focus:outline-none"
    >
      <span>Envie mais feedbacks</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "../Icon/index.vue";
import { resetStore } from "@/store";

export default defineComponent({
  name: "SuccessState",
  setup() {
    function goBack() {
      resetStore();
    }

    return { goBack };
  },
  components: { Icon },
});
</script>
