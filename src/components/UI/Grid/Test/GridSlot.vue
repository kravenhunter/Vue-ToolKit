<template>
  <div class="grid-container gap">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  minSize: {
    type: String,
    default: "320px",
  },
  maxSize: {
    type: String,
    default: "1fr",
  },
  columnGap: {
    type: String,
    default: "0px",
  },
  rowGap: {
    type: String,
    default: "0px",
  },
});
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(v-bind(minSize), v-bind(maxSize)));
  column-gap: v-bind(columnGap);
  row-gap: v-bind(rowGap);
}
</style>
