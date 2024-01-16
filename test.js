"use strict";
import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

const fontCount = reactive({
  count: 0,
});

const app = createApp({
  fontCount,
}).mount("#app");
