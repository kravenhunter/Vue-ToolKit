<script setup>
defineProps({
  size: {
    type: String,
    default: "32",
  },
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 32 32">
    <path fill="none" d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1.001 1.001 0 0 1 11 23Z" />
    <path fill="black" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm7.447 14.895l-12 6A1 1 0 0 1 10 22V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788Z" />
  </svg>
</template>

<style lang="scss" scoped></style>
