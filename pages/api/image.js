import { getAI } from "@/utils/openai";

export default async (req, res) => {
  try {
    const openai = getAI();
    const response = await openai.createImage(req.body);
    return res.status(200).json({ src: `${response.data.data[0].url}` });
  } catch (e) {
    if (e.response) {
      const { status = 400, data = { error: new Error("Something Wrong !!") } } = e.response;
      return res.status(status).json({ text: (data.error) ? ((data.error.message) ? data.error.message : data.error.toString()) : data.toString() });
    }

    return res.status(400).json({ text: (e.message) ? e.message : e.toString() });
  }
};
