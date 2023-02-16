import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);
export const getAI = () => openai;
export const getModals = async () => {
  try {
    let response = await openai.listModels();
    const openaiModals = response.data.data.filter(d => d.object === "model");

    response = await openai.listFineTunes();
    const myModals = response.data.data;
    return { openaiModals: openaiModals.map(d => d.id), myModals: myModals.map(d => d.id), fineTuneBaseModals: ["ada", "babbage", "curie", "davinci"]};
  } catch (e) {
    return false;
  }
};
