import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      // send file to backend server
      const response = await axios.post(
        "http://localhost:9000/upload",
        formData
      );
      if (response.status === 200) {
        // show success toast
        toast.success("File uploaded successfully!");
      }
    } catch (err) {
      toast.error("File upload failed!");
    }
  };

  return (
    <div className="mt-4 ">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        className="ml-24 bg-gray-500 mt-4 w-[10%] h[5%] rounded-md text-xl text-white hover:opacity-90"
        onClick={handleFileUpload}
      >
        Upload
      </button>
      <ToastContainer />
    </div>
  );
};

export default FileUpload;
