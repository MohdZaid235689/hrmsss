import React, { useState } from 'react';

function FileUploader() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files); // Convert FileList to array
    setFiles((prevFiles) => {
      // Append new files to the existing list
      return [...prevFiles, ...selectedFiles];
    });
    console.log('Selected files:', selectedFiles);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <label className="block mb-4">
          <span className="text-gray-700">Upload files</span>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:border file:border-gray-300
              file:rounded-md file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
              focus:outline-none focus:ring-2 focus:ring-blue-500
              cursor-pointer
            "
          />
        </label>
        <div className="mt-4">
          <p className="text-gray-600">Selected files:</p>
          <ul className="list-disc pl-5">
            {files.map((file, index) => (
              <li key={index} className="text-blue-600">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
