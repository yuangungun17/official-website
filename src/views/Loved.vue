<template>
  <section class="bg-slate-50 py-20 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Loved by businesses worldwide.
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          Our software is so simple that people can’t help but fall in love with
          it. Simplicity is easy when you just skip tons of mission-critical
          features.
        </p>
      </div>
      <ul
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
      ></ul>

      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
      >
        <ul class="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <loved-card :lovedData="lovedDataList[0]"></loved-card>
          </li>
          <li>
            <loved-card :lovedData="lovedDataList[3]"></loved-card>
          </li>
        </ul>
        <ul class="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <loved-card :lovedData="lovedDataList[1]"></loved-card>
          </li>
          <li>
            <loved-card :lovedData="lovedDataList[4]"></loved-card>
          </li>
        </ul>
        <ul class="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <loved-card :lovedData="lovedDataList[2]"></loved-card>
          </li>
          <li>
            <loved-card :lovedData="lovedDataList[5]"></loved-card>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LovedCard from "@/views/components/LovedCard.vue";

interface lovedData {
  id: number;
  content: string;
  name: string;
  position: string;
  url: string;
}
const lovedDataList = ref<lovedData[]>([
  {
    id: 1,
    content:
      "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
    name: "Sheryl Berge",
    position: "CEO at Lynch LLC",
    url:new URL("/src/assets/images/avatar/10001.png",import.meta.url).href
  },

  {
    id: 2,
    content:
      "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
    name: "Leland Kiehn",
    position: "Founder of Kiehn and Sons",
    url: new URL("/src/assets/images/avatar/10002.png",import.meta.url).href
  },
  {
    id: 3,
    content:
      "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
    name: "Peter Renolds",
    position: "Founder of West Inc",
    url:new URL("/src/assets/images/avatar/10003.png",import.meta.url).href
  },
  {
    id: 4,
    content:
      "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
    name: "Amy Hahn",
    position: "Director at Velocity Industries",
    url: new URL("/src/assets/images/avatar/10004.png",import.meta.url).href
  },
  {
    id: 5,
    content:
      "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
    name: "Erin Powlowski",
    position: "COO at Armstrong Inc",
    url: new URL("/src/assets/images/avatar/10005.png",import.meta.url).href
  },

  {
    id: 6,
    content:
      "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
    name: "Amy Hahn",
    position: "Director at Velocity Industries",
    url: new URL("/src/assets/images/avatar/10001.png",import.meta.url).href
  },
]);
</script>

<style scoped></style>
