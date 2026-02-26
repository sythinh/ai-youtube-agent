import { fetchTrend } from "./services/trend.service.js";
import { generateScript } from "./services/script.service.js";
import { generateVoice } from "./services/voice.service.js";
import { renderVideo } from "./services/video.service.js";
import { uploadVideo } from "./services/youtube.service.js";

export async function runPipeline() {
  const trend = await fetchTrend();
  console.log("🔥 Trend:", trend);

  const script = await generateScript(trend);
  const voice = await generateVoice(script);
  const video = await renderVideo(voice);

  await uploadVideo(video, trend);

  console.log("✅ Uploaded video:", trend);
}
