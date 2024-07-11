import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "diyryok0a",
  api_key: "394396372342625",
  api_secret: "F3ZQoTGUnCu7wpznmS_UvH8OY3o",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(400).json({ message: "Method not allowed" });
    return;
  }

  const form = formidable({});
  const [fields, files] = await form.parse(request);

  const file = files.photo[0];
  const { newFilename, filepath } = file;

  const result = await cloudinary.v2.uploader.upload(filepath, {
    public_id: newFilename,
    folder: "nf",
  });

  response.status(200).json(result);
}
