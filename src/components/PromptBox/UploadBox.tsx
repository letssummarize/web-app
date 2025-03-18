'use client';

import React, { useRef, useState } from 'react';
import CloudUpload from '../Icon/CloudUpload';

interface UploadBoxProps {
  onFileSelected: (file: File) => void;
}

function UploadBox({ onFileSelected }: UploadBoxProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
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
    setSelectedFile(file);
    onFileSelected(file);
  };

  const openFileSelector = () => {
    inputRef.current?.click();
  };

  return (
    <div
      onDrag={handleDrag}
      onDragStart={handleDrag}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      onClick={openFileSelector}
      className={`w-full bg-[#0C0C0C] flex flex-col items-center justify-center gap-4 rounded-[15px] cursor-pointer ${
        dragActive ? 'border-dashed' : ''
      }`}
    >
      <input
        type='file'
        ref={inputRef}
        onChange={handleChange}
        className='hidden'
        accept='.pdf,.docx,.txt'
      />
      {selectedFile ? (
        <div className='text-center flex flex-col items-center'>
          <p className='text-white font-medium text-lg mb-1'>
            {selectedFile.name}
          </p>
          <p className='text-gray-300 text-sm'>
            Size: {(selectedFile.size / 1024).toFixed(2)} KB
          </p>
          <p className='text-gray-300 text-sm'>
            Type: {selectedFile.type.split('/')[1].toUpperCase() || 'Unknown'}
          </p>
          <p className='text-sm flex gap-2 items-center border-t pt-3 mt-4 text-gray-400'>
            <CloudUpload className='w-6 h-auto ' />
            To upload a different file, click here or drag a new file
          </p>
        </div>
      ) : (
        <>
          <CloudUpload className='w-10 h-auto' />
          <p className='text-white font-medium'>
            Just drag and drop or upload your file
          </p>
          <p className='text-gray-400 text-sm'>
            Supported formats: PDF, DOCX, TXT
          </p>
        </>
      )}
    </div>
  );
}

export default UploadBox;
