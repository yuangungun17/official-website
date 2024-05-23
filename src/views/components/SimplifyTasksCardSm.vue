<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-lg" :class="task.isActive ? 'text-blue-600' : ''">
      <i class="iconfont icon-Contacts"></i>
    </div>
    <h3
      class="mt-6 text-sm font-medium"
      :class="task.isActive ? 'text-blue-600' : ''"
    >
      {{ task.title }}
    </h3>
    <p class="mt-2 font-display text-xl text-slate-900">
      {{ task.introduction }}
    </p>
    <p class="mt-4 text-sm text-slate-600">{{ task.others }}</p>
  </div>
  <div class="relative mt-10 pb-10">
    <div
      class="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"
    ></div>
    <div
      class="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
    >
      <img
        fetchpriority="high"
        width="2174"
        height="1464"
        decoding="async"
        data-nimg="1"
        class="w-full"
        style="color: transparent"
        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
        src="../../assets/images/business_report1.png"
      />
    </div>
  </div>
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
