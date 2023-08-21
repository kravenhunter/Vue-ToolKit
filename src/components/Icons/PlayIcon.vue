<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'black',
  },
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="30" viewBox="0 0 23 30" fill="none">
    <path d="M0.0380859 0.5V29.6667L22.9548 15.0833L0.0380859 0.5Z" :fill="color" />
  </svg>
</template>
