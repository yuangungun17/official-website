<template>
  <div class="rounded-lg "  :class="task.isActive ? 'text-blue-600' : '' ">
    <i class="iconfont icon-Contacts"></i>
  </div>
  <h3 class="mt-6 text-sm font-medium " :class="task.isActive ? 'text-blue-600' : '' ">
    <button>{{ task.title }}</button>
  </h3>
  <div class="mt-2 text-xl text-slate-900">{{ task.introduction }}</div>
  <div class="mt-4 text-sm text-slate-600">{{ task.others }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface taskObjType {
  id: Number;
  title: String;
  introduction: String;
  others: String;
  icon?: String;
  isActive?: Boolean;
}

defineProps<{
  task: taskObjType;
}>();
</script>

<style scoped></style>
