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
        <path
          :fill="color"
          d="m20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647.565 1.659.106 1.659-.753V5c0-.86-1.012-1.318-1.659-.753zm-11 0l-8 7a1 1 0 0 0 0 1.506l8 7C9.988 20.318 11 19.859 11 19V5c0-.86-1.012-1.318-1.659-.753z"
        />
      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped></style>
