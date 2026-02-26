import fs from "fs";
import { google } from "googleapis";

export async function uploadVideo(videoPath, title) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI,
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const youtube = google.youtube({
    version: "v3",
    auth: oauth2Client,
  });

  await youtube.videos.insert({
    part: "snippet,status",
    requestBody: {
      snippet: { title },
      status: { privacyStatus: "public" },
    },
    media: {
      body: fs.createReadStream(videoPath),
    },
  });
}
