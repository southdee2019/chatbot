import { getAI } from "@/utils/openai";

export default async (req, res) => {
  try {
    const openai = getAI();
    const completion = await openai.createCompletion(req.body);
    return res.status(200).json({ text: `${completion.data.choices[0].text}` });
  } catch (e) {
    if (e.response) {
      const { status = 400, data = { error: new Error("Something Wrong !!") } } = e.response;
      return res.status(status).json({ text: (data.error) ? ((data.error.message) ? data.error.message : data.error.toString()) : data.toString() });
    }

    return res.status(400).json({ text: (e.message) ? e.message : e.toString() });
  }
};
