<template>
  <section class="bg-slate-900 py-20 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="m-auto text-center">
        <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
          Simple pricing, for everyone.
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          It doesn’t matter what size your business is, our software won’t work
          well for you.
        </p>
      </div>
      <div
        class="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"
      >
        <price-card
          v-for="item in priceDataList"
          :key="item.option"
          :priceData="item"
        ></price-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PriceCard from "./components/PriceCard.vue";
const priceDataList = ref([
  {
    price: "$9",
    option: "Starter",
    introduction:
      "Good for anyone who is self-employed and just getting started.",
    points: [
      "Send 10 quotes and invoices",
      "Connect up to 2 bank accounts",
      "Track up to 15 expenses per month",
      "Manual payroll support",
      "Export up to 3 reports",
    ],
    blue: false,
  },
  {
    price: "$15",
    option: "Small business",
    introduction: "Perfect for small / medium sized businesses.",
    points: [
      "Send 25 quotes and invoices",
      "Connect up to 5 bank accounts",
      "Track up to 50 expenses per month",
      "Automated payroll support",
      "Export up to 12 reports",
      "Bulk reconcile transactions",
      "Track in multiple currencies",
    ],
    blue: true,
  },
  {
    price: "$39",
    option: "Enterprise",
    introduction: "For even the biggest enterprise companies.",
    points: [
      "Send unlimited quotes and invoices",
      "Connect up to 15 bank accounts",
      "Track up to 200 expenses per month",
      "Automated payroll support",
      "Export up to 25 reports, including TPS",
    ],
    blue: false,
  },
]);
</script>

<style scoped></style>
