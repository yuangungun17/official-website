<template>
  <section class="flex flex-col rounded-3xl px-6 py-6 sm:px-8 lg:py-8" :class=" priceData.blue==true ? 'active order-first lg:order-none' : ''">
    <h2
      class="order-first font-display text-5xl font-light tracking-tight text-white"
    >
      {{ priceData.price }}
    </h2>
    <h3 class="mt-5 font-display text-lg text-white">{{ priceData.option }}</h3>
    <p class="mt-2 text-base text-white">{{ priceData.introduction }}</p>
    <div  class="text-center ring-1   rounded-full py-2 px-4 text-sm mt-10" :class=" priceData.blue==true ? 'bg-slate-50' : 'text-white'">
      get started
    </div>

    <ul class="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
      <li v-for="item in priceData.points" :key="item">
        <span class="ml-4"> {{ item }} </span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps(["priceData"]);
</script>

<style scoped>
.active {
  background-color: #2563eb;
}

</style>
