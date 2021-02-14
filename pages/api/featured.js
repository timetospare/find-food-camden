import { TTS_API_URL } from "../../config.json";

const TTS_USER_ID = process.env.TTS_USER_ID;
const TTS_SECRET_ID = process.env.TTS_SECRET_ID;

export default async (req, res) => {
  const result = await fetch(`${TTS_API_URL}/featured`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "tts-user-key": TTS_USER_ID,
      "Content-Type": "application/json",
      "tts-secret-key": TTS_SECRET_ID,
    },
    body: JSON.stringify(req.body),
  }).catch((err) => {
    console.log("err", err.body.error);
  });
  res.statusCode = 200;
  res.json(result.body);
};
