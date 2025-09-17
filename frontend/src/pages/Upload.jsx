import React from 'react'
import { useState } from 'react';
export default function Upload() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (event) => {
    // Get the first file from the input
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadMessage(`File selected: ${file.name}`);
    } else {
      setSelectedFile(null);
      setUploadMessage('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setUploadMessage('Please select a file to upload.');
      return;
    }

    // You would typically handle the file upload to a server here.
    // For demonstration, we'll just log the file details.
    console.log('Uploading file:', selectedFile);
    setUploadMessage(`Uploading ${selectedFile.name}...`);
    
    // Simulate an upload process with a timeout
    setTimeout(() => {
      setUploadMessage('Upload successful!');
      setSelectedFile(null); // Reset the file input
    }, 2000);
  };

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-fuchsia-400">Upload Video</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="file-upload" className="block text-sm font-medium text-gray-400">Select a video file</label>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
            />
          </div>
          {uploadMessage && <p className="text-center text-sm">{uploadMessage}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-fuchsia-400 hover:bg-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-400 transition-colors duration-200"
            disabled={!selectedFile}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  )
}
