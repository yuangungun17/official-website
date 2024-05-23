import { idText } from 'typescript';
<template>
  <section class="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32">
    <img
      alt=""
      loading="lazy"
      width="2245"
      height="1636"
      decoding="async"
      data-nimg="1"
      class="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
      style="color: transparent"
      src="../assets/images/bg1.jpg"
    />
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h2
          class="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Everything you need to run your books.
        </h2>
        <p class="mt-6 text-lg tracking-tight text-blue-100">
          Well everything you need if you aren’t that picky about minor details
          like tax compliance.
        </p>
      </div>
      <div
        class="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
      >
        <div
          class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5"
        >
          <div
            class="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
          >
            <div
              v-for="item in reportList"
              :key="item.id"
              :class="currentActiveReport == item.id ? 'active-btn' : ''"
              class="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 hover:bg-white/10 lg:hover:bg-white/5"
              @click="reportMenuClick(item)"
            >
              <h3>
                <button
                  class="font-display text-lg ui-not-focus-visible:outline-none text-blue-100 hover:text-white lg:text-white"
                >
                  <span
                    class="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"
                  ></span>
                  {{ item.title }}
                </button>
              </h3>
              <p
                class="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-7">
          <div>
            <div class="relative sm:px-6 lg:hidden">
              <div
                class="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"
              ></div>
              <p
                class="relative mx-auto max-w-2xl text-base text-white sm:text-center"
              >
                {{ currentReportDescription }}
              </p>
            </div>
            <div
              class="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
            >
              <div v-for="item in reportList" :key="item.id">
                <img
                  v-if="item.isActive"
                  width="2174"
                  height="1464"
                  decoding="async"
                  data-nimg="1"
                  class="w-full"
                  style="color: transparent"
                  sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                  :src="item.imgUrl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import img1 from "../assets/images/xl_report_1.png";
import img2 from "../assets/images/xl_report_2.png";
import img3 from "../assets/images/xl_report_3.png";
import img4 from "../assets/images/xl_report_4.png";

// 当前活跃report按钮下标
const currentActiveReport = ref<number>(0);
// const currentReportImg = ref(
//   new URL(`/src/assets/images/xl_report_1.png`, import.meta.url).href
// );
const currentReportDescription = ref<string>(
  "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported."
);

interface reportObjType {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  imgUrl: any;
}
const reportList = ref<reportObjType[]>([
  {
    id: 0,
    title: "Payroll",
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    isActive: true,
    imgUrl: img1
  },
  {
    id: 1,
    title: "Claim expenses",
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    isActive: false,
    imgUrl: img2
  },
  {
    id: 2,
    title: "VAT handling",
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    isActive: false,
    imgUrl: img3
  },
  {
    id: 3,
    title: "Reporting",
    description:
      "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
    isActive: false,
    imgUrl: img4
  },
]);

const reportMenuClick = (target: reportObjType) => {
  currentActiveReport.value = target.id;
  currentReportDescription.value = target.description;
  // const url = `/src/assets/images/xl_report_${target.id + 1}.png`;
  // console.log(url, "url");
  reportList.value.forEach((item) => {
    item.isActive = false;
    if (item.id === target.id) {
      item.isActive = true;
    }
  });
};
</script>

<style scoped>
.active-btn {
  background-color: rgb(255 255 255 / 0.1);
}
</style>
