import React, { useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData);
      setUploaded(res.data);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploaded && (
        <div>
          <p>{uploaded.message}</p>
          <img
            src={`http://localhost:5000${uploaded.path}`}
            alt="Uploaded"
            style={{ width: "200px", marginTop: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
