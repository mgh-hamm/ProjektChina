<template>
  <a class="anchor" :id="anchor"></a>
  <div class="mt-2 mr-4">
    <div class="d-flex flex-row align-center">
      <v-btn size="x-small" icon="mdi-arrow-expand" @click="open = !open"></v-btn>
      <p class="pl-2 font-weight-medium">{{ title }}</p>
    </div>
    <v-divider class="mt-1 mb-1"></v-divider>
    <v-expand-transition>
      <div v-if="open" class="ml-2">
        <slot></slot>
      </div>
    </v-expand-transition>
  </div>
  <vertical-spacer />
</template>

<script setup lang="ts">
import { ref } from "vue";
import VerticalSpacer from "./VerticalSpacer.vue";

defineProps<{
  title: string;
  anchor: string;
}>();

const open = ref(true);
</script>

<style>
.anchor {
  display: block;
  position: relative;
  top: -50px;
  visibility: hidden;
}
</style>