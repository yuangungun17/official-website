<template>
  <div class="mx-auto max-w-7xl text-center">
    <Header @menuClick="menuClick"></Header>
  </div>

  <div
    class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32"
  >
    <h1
      class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl sm:leading-tight"
    >
      Accounting
      <span class="relative whitespace-nowrap text-blue-600">made simple</span>
      for small businesses.
    </h1>
    <p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
      Most bookkeeping software is accurate, but hard to use. We make the
      opposite trade-off, and hope you don’t get audited.
    </p>
    <div class="mt-10 flex justify-center gap-x-6">
      <a
        href=""
        class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
        >Get 6 months free</a
      >
      <a
        href=""
        class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
        >Watch video</a
      >
    </div>
    <div class="mt-36 lg:mt-44">
      <p class="font-display text-base text-slate-900">
        Trusted by these six companies so far
      </p>
      <ul
        class="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
      >
        <li>
          <ul
            class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
          >
            <li class="flex">
              <img
                alt="Transistor"
                loading="lazy"
                width="158"
                height="48"
                decoding="async"
                data-nimg="1"
                style="color: transparent"
                src="../assets/images/10001.svg"
              />
            </li>
            <li class="flex">
              <img
                alt="Transistor"
                loading="lazy"
                width="158"
                height="48"
                decoding="async"
                data-nimg="1"
                style="color: transparent"
                src="../assets/images/10002.svg"
              />
            </li>
            <li class="flex">
              <img
                alt="Transistor"
                loading="lazy"
                width="158"
                height="48"
                decoding="async"
                data-nimg="1"
                style="color: transparent"
                src="../assets/images/10003.svg"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul
            class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
          >
            <li class="flex">
              <img
                alt="Transistor"
                loading="lazy"
                width="158"
                height="48"
                decoding="async"
                data-nimg="1"
                style="color: transparent"
                src="../assets/images/10004.svg"
              />
            </li>
            <li class="flex">
              <img
                alt="Transistor"
                loading="lazy"
                width="158"
                height="48"
                decoding="async"
                data-nimg="1"
                style="color: transparent"
                src="../assets/images/10005.svg"
              />
            </li>
            <li class="flex">
              <img
                alt="Transistor"
                loading="lazy"
                width="158"
                height="48"
                decoding="async"
                data-nimg="1"
                style="color: transparent"
                src="../assets/images/10006.svg"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div ref="featuresRef">
    <synopsis></synopsis>
    <simplify-tasks></simplify-tasks>
  </div>
  <get-start></get-start>
  <div ref="testimonialsRef">
    <Loved></Loved>
  </div>
  <div ref="pricingRef">
    <Price></Price>
  </div>
  <Questions></Questions>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import Header from "@/components/Header.vue";
import Synopsis from "@/views/Synopsis.vue";
import SimplifyTasks from "@/views/SimplifyTasks.vue";
import GetStart from "@/views/GetStart.vue";
import Loved from "@/views/Loved.vue";
import Price from "@/views/Price.vue";
import Questions from "@/views/Questions.vue";
const featuresRef: Ref<HTMLElement | null> = ref(null);
const testimonialsRef: Ref<HTMLElement | null> = ref(null);
const pricingRef: Ref<HTMLElement | null> = ref(null);
const menuClick = (val: string) => {
  if (val === "features") {
    featuresRef.value?.scrollIntoView({ behavior: "smooth" });
  } else if (val === "testimonials") {
    testimonialsRef.value?.scrollIntoView({ behavior: "smooth" });
  } else {
    pricingRef.value?.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped></style>
