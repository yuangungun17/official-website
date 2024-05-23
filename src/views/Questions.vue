<template>
  <section class="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
    <img src="/src/assets/images/ques_bg.jpg" class="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]" alt="">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div>
        <h2
          class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Frequently asked questions
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700z">
          If you can’t find what you’re looking for, email our support team and
          if you’re lucky someone will get back to you.
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
      >
        <div v-for="item in quesList" :key="item.question">
          <question-card :CardContent="item"></question-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import QuestionCard from "./components/QuestionCard.vue";
import { ref } from "vue";
const quesList = ref([
  {
    question: "Does TaxPal handle VAT?",
    answer:
      "Well no, but if you move your company offshore you can probably ignore it.",
  },
  {
    question: "Can I pay for my subscription via purchase order?",
    answer: "Absolutely, we are happy to take your money in all forms.",
  },
  {
    question: "How do I apply for a job at TaxPal?",
    answer:
      "We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.",
  },
  {
    question: "What was that testimonial about tax fraud all about?",
    answer:
      "TaxPal is just a software application, ultimately your books are your responsibility.",
  },
  {
    question:
      "TaxPal sounds horrible but why do I still feel compelled to purchase?",
    answer:
      "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",
  },
  {
    question:
      "I found other companies called TaxPal, are you sure you can use this name?",
    answer:
      "Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.",
  },
  {
    question: "How do you generate reports?",
    answer:
      "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
  },
  {
    question: "Can we expect more inventory features?",
    answer: "In life it’s really better to never expect anything at all.",
  },
  {
    question: "I lost my password, how do I get into my account?",
    answer:
      "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.",
  },
]);
</script>

<style scoped></style>
