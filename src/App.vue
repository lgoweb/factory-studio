<template>
  <div class="App">good job</div>
  <Demo :txt="`真男人`" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Demo from "@/components/demo/index.vue";

interface State {
  message: string;
}

export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    const state = reactive({
      message: "Learn Vue",
    });
    return {
      state,
    };
  },
});
</script>

<style></style>
