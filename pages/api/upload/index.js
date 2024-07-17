import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
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
  const form = formidable({ multiples: true });
  const [fields, files] = await form.parse(request);
  const fileUploadPromises = Object.values(files)
    .flat()
    .map((file) => {
      const { filepath, newFilename } = file;
      return cloudinary.v2.uploader.upload(filepath, {
        public_id: newFilename,
        folder: "vivaVenture",
      });
    });

  const results = await Promise.all(fileUploadPromises);
  const modifiedResults = results.map((image) => {
    return { data_url: image.secure_url };
  });
  response.status(200).json(modifiedResults);
}
