import { exec } from "child_process";

export function generateVoice(script) {
  return new Promise((resolve, reject) => {
    const aiff = "out/voice.aiff";
    const mp3 = "out/voice.mp3";

    exec(`say -o ${aiff} "${script.replace(/"/g, "")}"`, (err) => {
      if (err) return reject(err);

      exec(`ffmpeg -y -i ${aiff} ${mp3}`, (err2) => {
        if (err2) return reject(err2);
        resolve(mp3);
      });
    });
  });
}
