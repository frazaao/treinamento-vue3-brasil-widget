<template>
  <div
    class="w-full h-3/4 flex flex-col items-center justify-center bg-brand-main"
  >
    <h1 class="text-6xl font-black text-brand-gray">Playground</h1>
    <p class="text-2xl mt-3 font-regular text-brand-gray">
      Este é o Playground, use para testar o widget
    </p>
  </div>

  <div
    class="w-full h-3/4 flex flex-col items-center justify-center bg-brand-gray"
  >
    <h1 class="text-6xl font-black text-brand-graydark">Playground</h1>
  </div>

  <div
    class="w-full h-3/4 flex flex-col items-center justify-center bg-brand-main"
  >
    <h1 class="text-6xl font-black text-brand-gray">Playground</h1>
  </div>

  <div
    class="w-full h-3/4 flex flex-col items-center justify-center bg-brand-gray"
  >
    <h1 class="text-6xl font-black text-brand-graydark">Playground</h1>
  </div>

  <Widget />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Widget from "@/components/Widget/index.vue";

export default defineComponent({
  name: "PlaygroundPage",
  components: { Widget },
});
</script>
