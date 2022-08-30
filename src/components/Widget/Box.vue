<template>
  <div class="box animate__animated animate__fadeInUp animate__faster">
    <div class="flex items-center justify-between w-full">
      <button
        @click="back"
        class="leading-none text-brand-graydark hover:text-gray-700 cursor-pointer transition-colors"
        :class="{ 'opacity-0': canGoBack }"
        :disabled="canGoBack"
      >
        &larr;
      </button>

      <span
        :class="{ 'opacity-0': !canShowAdditionalControlAndInfo }"
        class="font-black text-lg text-brand-main"
        >{{ label }}</span
      >

      <button
        @click="() => emit('close-box')"
        class="leading-none text-brand-graydark hover:text-gray-700 cursor-pointer transition-colors"
      >
        &times;
      </button>
    </div>

    <Wizard />

    <div class="flex items-center gap-2 mt-2">
      <Icon name="Chat" color="gray" size="16" />
      <span class="text-xs">widget by <strong>feedbacker</strong></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from "vue";
import { brand } from "../../../palette.js";
import colors from "tailwindcss/colors";
import useStore from "@/hooks/store";
import Icon from "../Icon/index.vue";
import Wizard from "./Wizard.vue";
import useNavigation from "@/hooks/navigation";

export default defineComponent({
  emits: ["close-box"],

  name: "BoxState",

  setup(_, { emit }: SetupContext) {
    const store = useStore();
    const { back } = useNavigation();

    const label = computed(() => {
      if (store.feedbackType === "ISSUE") {
        return "Reporte um problema";
      }
      if (store.feedbackType === "IDEA") {
        return "Nos fale a sua idéia";
      }
      if (store.feedbackType === "OTHER") {
        return "Abra sua mente";
      }
      return "O que você tem em mente";
    });

    const canGoBack = computed(() => {
      return store.currentComponent === "SelectFeedbackType";
    });

    const canShowAdditionalControlAndInfo = computed(() => {
      return (
        store.currentComponent !== "Success" &&
        store.currentComponent !== "Error"
      );
    });

    return {
      emit,
      canGoBack,
      colors,
      label,
      bandColors: brand,
      canShowAdditionalControlAndInfo,
      back,
    };
  },
  components: { Icon, Wizard },
});
</script>

<style scoped lang="postcss">
.box {
  @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl p-5 flex items-center shadow-xl select-none flex-col w-[400px];
}
</style>
