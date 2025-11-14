const uploaddocfile = (req, res) => {
  try {
    if (!req.file) {
      return res.json({ message: "no doc file uploaded" });
    }

    res.json({
      message: "doc file uploaded successfully",
      file: {
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size
      }
    });
  } catch (error) {
    res.json({ message: "upload failed", error: error.message });
  }
};

module.exports = { uploaddocfile };
