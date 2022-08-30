<template>
  <component
    :is="store.currentComponent"
    @select-feedback-type="handleSelectFeedbackType"
    @next="next"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useStore from "@/hooks/store";
import useNavigation from "@/hooks/navigation";
import { setFeedbackType } from "@/store";

import SelectFeedbackType from "./SelectFeedbackType.vue";
import WriteAFeedback from "./WriteAFeedback.vue";
import Error from "./Error.vue";
import Success from "./Success.vue";

export default defineComponent({
  name: "WizardComponent",

  components: { SelectFeedbackType, WriteAFeedback, Error, Success },

  setup() {
    const store = useStore();
    const { next } = useNavigation();

    function handleSelectFeedbackType(type: string) {
      setFeedbackType(type);
    }

    return {
      store,
      handleSelectFeedbackType,
      next,
    };
  },
});
</script>
