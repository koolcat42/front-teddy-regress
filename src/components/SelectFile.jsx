import { useState } from "react";

export default function SelectFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // get first selected file
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <label
        htmlFor="fileInput"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Select File
      </label>

      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }} // hide default input
        onChange={handleFileChange}
      />

      {selectedFile && (
        <div style={{ marginTop: "10px" }}>
          <strong>Selected File:</strong> {selectedFile.name}
        </div>
      )}
    </div>
  );
}
