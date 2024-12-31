import React, { useState } from 'react';
import { Upload, Image as ImageIcon, AlertCircle } from 'lucide-react';

export default function ImageUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Simulate file preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center ${
          dragActive ? 'border-purple-600 bg-purple-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="hidden"
          id="image-upload"
          accept="image/*"
          onChange={handleChange}
        />
        
        {preview ? (
          <div className="space-y-4">
            <img
              src={preview}
              alt="Preview"
              className="mx-auto max-h-64 rounded-lg"
            />
            <button 
              onClick={() => setPreview(null)}
              className="text-sm text-red-600 hover:text-red-700"
            >
              Remove image
            </button>
          </div>
        ) : (
          <label
            htmlFor="image-upload"
            className="cursor-pointer space-y-4 flex flex-col items-center"
          >
            <Upload className="h-12 w-12 text-purple-600" />
            <div className="space-y-2">
              <p className="text-xl font-medium text-gray-900">
                Upload your skin image
              </p>
              <p className="text-sm text-gray-500">
                Drag and drop or click to select
              </p>
            </div>
          </label>
        )}
      </div>

      {preview && (
        <button
          className="w-full mt-4 bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 flex items-center justify-center space-x-2"
        >
          <ImageIcon className="h-5 w-5" />
          <span>Analyze Image</span>
        </button>
      )}

      <div className="mt-4 p-4 bg-blue-50 rounded-lg flex items-start space-x-3">
        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
        <div className="text-sm text-blue-700">
          <p className="font-medium">Privacy Notice</p>
          <p>Your images are processed securely and never stored permanently. We prioritize your privacy and data protection.</p>
        </div>
      </div>
    </div>
  );
}