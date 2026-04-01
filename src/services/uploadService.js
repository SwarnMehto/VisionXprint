export function uploadDesign(file) {
  console.log("Uploaded file:", file);
  return {
    success: true,
    fileUrl: URL.createObjectURL(file),
  };
}