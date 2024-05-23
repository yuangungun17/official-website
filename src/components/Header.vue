<template>
  <div
    class=" flex items-center justify-between  m-0 px-6 py-10"
  >
    <div class="flex items-center space-x-14">
      <div class="flex items-center space-x-5">
        <img src="../assets/images/logo.ico" alt="Icon" />
        <div class="font-bold text-xl">
          Tax<span class="text-blue-600">Pal</span>
        </div>
      </div>
      <div class="hidden md:block" @click="myMenuClick('features')">Features</div>
      <div class="hidden md:block" @click="myMenuClick('testimonials')">Testimonials</div>
      <div class="hidden md:block" @click="myMenuClick('pricing')">Pricing</div>
    </div>
    <div class="flex items-center space-x-5">
      <div>Sign in</div>
      <el-button type="primary" size="large" round>Get Started</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from "element-plus";
const emit = defineEmits(["menuClick"]);
const myMenuClick= (val:string)=>{
  emit('menuClick',val)
}
</script>

<style scoped></style>
