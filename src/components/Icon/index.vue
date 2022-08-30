<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from "./Loading.vue";
import Copy from "./Copy.vue";
import ChevronDown from "./ChevronDown.vue";
import Chat from "./Chat.vue";
import Error from "./Error.vue";
import Check from "./Check.vue";

export default {
  name: "IconsComponent",
  components: { Loading, Copy, ChevronDown, Chat, Error, Check },
  props: {
    name: { type: String, required: true },
  },
};
</script>
