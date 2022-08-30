<template>
  <div class="flex items-center justify-center w-full gap-2 mt-3">
    <button
      @click="() => handleSelect('ISSUE')"
      class="flex flex-col items-center justify-center min-w-[90px] px-2 bg-brand-gray h-[100px] rounded-xl hover:bg-brand-graydark cursor-pointer transition-colors"
    >
      <span class="text-3xl">⚠️</span>

      <span class="text-xs font-bold">Problema</span>
    </button>

    <button
      @click="() => handleSelect('IDEA')"
      class="flex flex-col items-center justify-center min-w-[90px] px-2 bg-brand-gray h-[100px] rounded-xl hover:bg-brand-graydark cursor-pointer transition-colors"
    >
      <span class="text-3xl">&#x1F525;</span>

      <span class="text-xs font-bold">Ideia</span>
    </button>

    <button
      @click="() => handleSelect('OTHER')"
      class="flex flex-col items-center justify-center min-w-[90px] px-2 bg-brand-gray h-[100px] rounded-xl hover:bg-brand-graydark cursor-pointer transition-colors"
    >
      <span class="text-3xl">&#x1F4A1;</span>

      <span class="text-xs font-bold">Outro</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(_, { emit }) {
    function handleSelect(type: string) {
      emit("select-feedback-type", type);
      emit("next");
    }

    return {
      emit,
      handleSelect,
    };
  },
});
</script>
