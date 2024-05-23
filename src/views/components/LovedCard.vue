<template>
  <div class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
    <div class="text-lg tracking-tight text-slate-900">
      {{ lovedData.content }}
    </div>
    <div
      class="mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
    >
      <div>
        <p class="text-lg tracking-tight text-slate-900">
          {{ lovedData.name }}
        </p>
        <p class="mt-1 text-sm text-slate-500">{{ lovedData.position }}</p>
      </div>
      <img
        class="h-14 w-14 object-cover rounded-full"
        :src="lovedData.url"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["lovedData"]);
</script>

<style scoped></style>
