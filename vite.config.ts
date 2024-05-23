import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import legacy from "@vitejs/plugin-legacy";
import path from "path";
const { resolve } = path;
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      // dts: "/auto-import.d.ts", 
      // resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components','src/views'],
      // resolvers: [ElementPlusResolver()],
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  css: {
    modules: {},
    devSourcemap: false,
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
    preprocessorOptions: {
      less: {
        math: "always", // 括号内才使用数学计算
        globalVars: {
          // 全局变量
          // mainColor: "red",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "localhost", // 指定服务器主机名
    port: 8880, // 指定服务器端口
    hmr: true, // 开启热更新
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
  },
});
