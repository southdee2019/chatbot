import { getAI } from "@/utils/openai";

export default async (req, res) => {
  try {
    const openai = getAI();
    if (req.method === "POST") {
      const file = req.body.file;
      const baseModel = req.body.baseModel;

      let response = await openai.createFile(file, "fine-tune");
      let model = false;

      if (response.object === "file") {
        const fileId = response.id || "";
        if (fileId.length === 0) {
          response = await openai.createFineTune({
            training_file: fileId,
            model: baseModel,
            suffix: req.body.suffix
          });

          model = response.id || false;
        }
      }

      return res.status(200).json({ model });
    }

    if (req.method === "DELETE") {
      const model = req.body.model;
      const response = await openai.retrieveFineTune(model);
      if (response.object === "fine-tune") {
        const files = response.training_files || [];
        await Promise.all(files.map(({ id }) => openai.deleteFile(id)))
      }

      return res.status(200).json({ model });
    }

    return res.status(405).json({ model: false });
  } catch (e) {
    return res.status(400).json({ model: false });
  }
};
