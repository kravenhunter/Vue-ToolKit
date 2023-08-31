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
    <g transform="rotate(180 12 12)">
      <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M0 0h24v24H0z" />
        <path :fill="color" d="M2 5v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C3.012 3.682 2 4.141 2 5zm11 0v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C14.012 3.682 13 4.141 13 5z" />
      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped></style>
