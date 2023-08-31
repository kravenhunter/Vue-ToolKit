<script setup>
defineProps({
  color: {
    type: String,
    default: "black",
  },

  size: {
    type: String,
    default: "32",
  },
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
    <g transform="rotate(180 12 12)"><path :fill="color" d="M11 7H8v10h3V7Zm2 10h3V7h-3v10Z" /></g>
  </svg>
</template>

<style lang="scss" scoped></style>
