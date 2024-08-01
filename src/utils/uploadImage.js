import uploader from "../config/cloudinary.js";
import fs from "fs";

export const fileUploader = async (req) => {
  try {
    const tmp = req.files[0].path;
    const result = await uploader.upload(
      tmp,
      { folder: "blogs" },
      (_, result) => result
    );
    fs.unlink(tmp, (err) => {
      if (err) {
        console.error("Error removing file:", err);
      }
    });
    return result;
  } catch (error) {
    fs.unlink(req.files[0].path, (err) => {
      if (err) {
        console.error("Error removing file:", err);
      }
    });
    throw new Error(`Error uploading file: ${error}`);
  }
};
