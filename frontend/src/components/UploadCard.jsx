// import { useState } from "react";
// import { IoCloudUploadOutline } from "react-icons/io5";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const UploadCard = () => {
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [resume, setResume] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onFileChange = (e) => {
//     setResume(e.target.files[0]);
//     setError(""); // Clear error when a file is selected
//   };

//   const onFileUpload = async () => {
//     if (!resume) {
//       setError("Please select a file.");
//       setTimeout(() => setError(""), 2000);
//       return;
//     }

//     setLoading(true);
//     const formData = new FormData();
//     formData.append("resume", resume);

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/api/service/upload`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setMessage(response.data.message);
//     } catch (error) {
//       console.error("Error uploading resume:", error);
//       setError("Failed to upload. Try again.");
//       setTimeout(() => setError(""), 2000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onViewJobs = () => {
//     navigate("/jobs");
//   };

//   return (
//     <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4">
//       <div className="max-w-lg w-full bg-white shadow-lg rounded-xl p-8">
//         <h1 className="text-3xl font-semibold text-center text-gray-800">
//           JobFit Analyzer
//         </h1>
//         <p className="text-gray-600 text-center mt-2">
//           Upload your resume and let AI match you with the best job opportunities.
//         </p>

//         <div className="border-2 border-dashed border-gray-300 rounded-xl mt-6 p-6 flex flex-col items-center bg-gray-50">
//           <IoCloudUploadOutline className="w-16 h-16 text-blue-500" />
//           <h2 className="text-lg font-medium text-gray-700 mt-2">
//             Drag & Drop or <span className="text-blue-600 cursor-pointer">Browse</span>
//           </h2>

//           <input
//             type="file"
//             accept=".pdf,.docx"
//             onChange={onFileChange}
//             className="mt-4 w-full cursor-pointer text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
//           />

//           {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
//           {message && <p className="text-green-600 text-sm mt-3">{message}</p>}
//         </div>

//         <button
//           onClick={onFileUpload}
//           disabled={loading}
//           className={`w-full mt-6 py-2 rounded-lg text-white font-medium transition ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-500 hover:bg-blue-600"
//           }`}
//         >
//           {loading ? "Uploading..." : "Upload"}
//         </button>

//         {message && (
//           <button
//             onClick={onViewJobs}
//             className="w-full mt-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//           >
//             View Jobs
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadCard;

import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadCard = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFileChange = (e) => {
    setResume(e.target.files[0]);
    setError("");
  };

  const onFileUpload = async () => {
    if (!resume) {
      setError("Please select a file.");
      setTimeout(() => setError(""), 2000);
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("resume", resume);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/service/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // ✅ Correct placement inside `headers`
          },
        }
      );
      console.log(response)

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error uploading resume:", error);
      setError("Failed to upload. Try again.");
      setTimeout(() => setError(""), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 px-4">
    //   <div className="max-w-lg w-full bg-white shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-105">
    //     <h2 className="text-2xl font-bold text-center text-blue-700">
    //       Upload Your Resume
    //     </h2>
    //     <p className="text-gray-600 text-center mt-2">
    //       Easily upload your resume to apply for jobs and track your
    //       applications.
    //     </p>

    //     <div className="border-2 border-dashed border-blue-300 rounded-2xl p-6 flex flex-col items-center bg-blue-50 hover:bg-blue-100 transition mt-4">
    //       <IoCloudUploadOutline className="w-20 h-20 text-blue-600 animate-bounce" />
    //       <p className="text-gray-600 mt-2">Accepted formats: PDF, DOCX</p>
    //       <input
    //         type="file"
    //         accept=".pdf,.docx"
    //         onChange={onFileChange}
    //         className="mt-4 w-full cursor-pointer text-sm text-gray-700 file:mr-4 file:py-3 file:px-5 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition"
    //       />
    //       {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
    //       {message && <p className="text-green-600 text-sm mt-3">{message}</p>}
    //     </div>

    //     <button
    //       onClick={onFileUpload}
    //       disabled={loading}
    //       className={`w-full mt-6 py-3 rounded-xl text-white font-semibold transition shadow-lg ${
    //         loading
    //           ? "bg-gray-400 cursor-not-allowed"
    //           : "bg-blue-500 hover:bg-blue-600"
    //       }`}
    //     >
    //       {loading ? "Uploading..." : "Upload Resume"}
    //     </button>

    //     {message && (
    //       <button
    //         onClick={() => navigate("/jobs")}
    //         className="w-full mt-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition shadow-lg"
    //       >
    //         View Jobs
    //       </button>
    //     )}
    //   </div>
    // </div>
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
  <div className="max-w-lg w-full bg-white shadow-lg rounded-xl p-8 border border-gray-200">
    <h2 className="text-2xl font-semibold text-center text-gray-800">
      Upload Your Resume
    </h2>
    <p className="text-gray-600 text-center mt-2">
      Upload your resume to apply for jobs and track your applications.
    </p>

    <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center bg-gray-50 hover:bg-gray-100 transition mt-4">
      <IoCloudUploadOutline className="w-16 h-16 text-gray-500" />
      <p className="text-gray-600 mt-2 text-sm">Accepted formats: PDF, DOCX</p>
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={onFileChange}
        className="mt-4 w-full cursor-pointer text-sm text-gray-700 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300 transition"
      />
      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      {message && <p className="text-green-600 text-sm mt-3">{message}</p>}
    </div>

    <button
      onClick={onFileUpload}
      disabled={loading}
      className={`w-full mt-6 py-3 rounded-lg text-white font-medium transition ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {loading ? "Uploading..." : "Upload Resume"}
    </button>

    {message && (
      <button
        onClick={() => navigate("/jobs")}
        className="w-full mt-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        View Jobs
      </button>
    )}
  </div>
</div>

  );
};

export default UploadCard;
