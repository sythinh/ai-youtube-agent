import cron from "node-cron";
import { runPipeline } from "./pipeline.js";

console.log("🚀 AI YouTube Agent running on server...");

// chạy mỗi ngày 9h sáng
cron.schedule("0 9 * * *", async () => {
  console.log("⏰ Running daily pipeline...");
  await runPipeline();
});

// giữ server sống
setInterval(() => {}, 1000 * 60 * 60);
