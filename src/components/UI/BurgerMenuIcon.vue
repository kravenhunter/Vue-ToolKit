<script setup>
defineProps({
  color: {
    type: String,
    default: "black",
  },
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 6H21M3 12H21M3 18H21" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
