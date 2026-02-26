import cron from "node-cron";
import { runPipeline } from "../pipeline.js";

cron.schedule("0 9 * * *", async () => {
  console.log("⏰ Running pipeline...");
  await runPipeline();
});
