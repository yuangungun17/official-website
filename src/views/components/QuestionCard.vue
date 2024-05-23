<template>
  <h3 class="font-display text-lg leading-7 text-slate-900">{{ CardContent.question }}</h3>
  <p class="mt-4 text-sm text-slate-700">{{ CardContent.answer }}</p>
</template>

<script setup lang="ts">
defineProps(["CardContent"]);
</script>

<style scoped></style>
