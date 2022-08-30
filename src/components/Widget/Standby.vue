<template>
  <div
    @click="() => emit('open-box')"
    class="fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-brand-main rounded-full py-3 px-5 flex items-center shadow-xl cursor-pointer select-none animate__animated animate__fadeInUp animate__faster"
  >
    <Icon name="Chat" color="white" :size="27" />
    <span class="text-white font-black text-xl ml-2"> Deixe um Feedback </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";
import Icon from "../Icon/index.vue";

interface SetupReturn {
  emit: SetupContext["emit"];
}

export default defineComponent({
  name: "StandbyState",
  setup(_, { emit }: SetupContext): SetupReturn {
    return {
      emit,
    };
  },
  components: { Icon },
});
</script>
