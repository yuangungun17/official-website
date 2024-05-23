<template>
  <section class="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl md:text-center">
        <h2
          class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Simplify everyday business tasks.
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          Because you’d probably be a little confused if we suggested you
          complicate your everyday business tasks instead.
        </p>
      </div>

      <div
        class="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden"
      >
        <div v-for="task in taskList" :key="task.id">
          <simplify-tasks-card-sm :task="task"></simplify-tasks-card-sm>
        </div>
      </div>

      <div class="hidden lg:block lg:mt-20">
        <div class="grid grid-cols-3 gap-x-8">
          <div
            v-for="(task, index) in taskList"
            :key="task.id"
            @click="taskClick(task, index)"
          >
            <simplify-tasks-card-lg :task="task"></simplify-tasks-card-lg>
          </div>
        </div>
        <div
          class="relative mt-20 overflow-hidden rounded-3xl bg-slate-200 px-14 py-16 xl:pl-16 xl:pr-0"
        >
          <div class="flex">
            <div class="swiper-container">
              <div class="swiper">
                <swiper
                  @swiper="setSwiper"
                  ref="swiperRef"
                  :slides-per-view="1.4"
                  :space-between="50"
                >
                  <swiper-slide
                    ><img src="../assets/images/business_report1.png" alt=""
                  /></swiper-slide>
                  >
                  <swiper-slide
                    ><img src="../assets/images/business_report2.png" alt=""
                  /></swiper-slide>
                  >
                  <swiper-slide
                    ><img src="../assets/images/business_report3.png" alt=""
                  /></swiper-slide>
                  <swiper-slide></swiper-slide>
                </swiper>
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
import SimplifyTasksCardSm from "@/views/components/SimplifyTasksCardSm.vue";
import SimplifyTasksCardLg from "@/views/components/SimplifyTasksCardLg.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
interface SwiperInstance {
  slideTo(index: number): void;
  swiper: any; // 根据 Swiper 的类型定义设置
}
const swiperRef = ref<SwiperInstance | null>(null);
const setSwiper = (swiper:any) => {
  swiperRef.value = swiper;
};
const goToSlide = (index: number) => {
  swiperRef.value?.slideTo(index);
};
onMounted(() => {
  if (swiperRef.value) {
    console.log(swiperRef.value.swiper);
  }
});
interface taskObjType {
  id: number;
  title: string;
  introduction: string;
  others: string;
  icon?: String;
  isActive?: Boolean;
}
type taskListType = taskObjType[];
const taskList = ref<taskListType>([
  {
    id: 1,
    title: "Reporting",
    introduction:
      "Stay on top of things with always up-to-date reporting features.",
    others:
      "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
    icon: "icon-Reporting",
    isActive: true,
  },
  {
    id: 2,
    title: "Inventory",
    introduction:
      "Never lose track of what’s in stock with accurate inventory tracking.",
    others:
      "We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
    isActive: false,
  },
  {
    id: 3,
    title: "Contacts",
    introduction:
      "Organize all of your contacts, service providers, and invoices in one place.",
    others:
      "This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
    icon: "icon-Contacts",
    isActive: false,
  },
]);
const taskClick = (task: taskObjType, index: number) => {
  taskList.value.forEach((element: taskObjType) => {
    if (task.id === element.id) {
      element.isActive = true;
    } else {
      element.isActive = false;
    }
  });
  goToSlide(index);
};
</script>

<style scoped lang="less">
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-slide {
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
