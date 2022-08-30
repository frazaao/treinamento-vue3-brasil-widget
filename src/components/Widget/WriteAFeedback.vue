<template>
  <div class="flex flex-col items-center justify-center w-full my-5">
    <textarea
      v-model="state.feedback"
      class="w-full rounded-lg border-2 border-gray-300 border-solid h-24 p-2 resize-none focus:outline-none"
    ></textarea>

    <button
      :disabled="submitButtonIsDisabled"
      :class="{
        'opacity-50': state.isLoading,
        'opacity-50 bg-gray-100 text-gray-500 cursor-not-allowed':
          submitButtonIsDisabled,
        'bg-brand-main text-white': !submitButtonIsDisabled,
      }"
      @click="submitAFeedback"
      class="rounded-lg font-black mt-3 flex flex-col justify-center items-center py-2 w-full cursor-pointer focus:outline-none transition-all duration-200"
    >
      <Icon
        v-if="state.isLoading"
        name="Loading"
        color="white"
        size="20"
        class="animate-spin"
      />
      <span>Enviar feedback</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

import useStore from "@/hooks/store";
import useNavigation from "@/hooks/navigation";

import { setMessage } from "@/store";
import services from "@/services";

import Icon from "../Icon/index.vue";

type State = {
  feedback: string;
  isLoading: boolean;
  hasError: Error | null;
};

export default defineComponent({
  components: { Icon },

  setup() {
    const store = useStore();
    const { setErrorState, setSuccessState } = useNavigation();
    const state = reactive<State>({
      feedback: "",
      isLoading: false,
      hasError: null,
    });
    const submitButtonIsDisabled = computed<boolean>(() => {
      return !state.feedback.length;
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleError(err: any) {
      state.hasError = err;
      state.isLoading = false;
      setErrorState();
    }

    async function submitAFeedback(): Promise<void> {
      setMessage(state.feedback);

      try {
        state.isLoading = true;
        const response = await services.feedbacks.create({
          type: store.feedbackType,
          text: store.message,
          page: store.currentPage,
          apiKey: store.apiKey,
          device: window.navigator.userAgent,
          fingerprint: store.fingerprint,
        });

        if (!response.errors) {
          setSuccessState();
        } else {
          setErrorState();
        }

        state.isLoading = false;
      } catch (error) {
        handleError(error);
      }
    }

    return {
      store,
      state,
      handleError,
      submitButtonIsDisabled,
      submitAFeedback,
    };
  },
});
</script>
