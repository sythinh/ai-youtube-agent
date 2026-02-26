import { exec } from "child_process";

export function renderVideo(audioFile) {
  return new Promise((resolve, reject) => {
    const out = "out/video.mp4";

    exec(
      `ffmpeg -y -loop 1 -i assets/bg.jpg -i ${audioFile} -shortest -vf scale=1080:1920 ${out}`,
      (err) => {
        if (err) return reject(err);
        resolve(out);
      },
    );
  });
}
