import { createApp } from "vue";
import "./style.css";
import "./tailwind.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "@/router/index.ts";
import "@/assets/icon/iconfont.css";
// import "swiper/css/swiper.css";


createApp(App).use(router).use(ElementPlus).mount("#app");
