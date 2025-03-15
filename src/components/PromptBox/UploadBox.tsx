'use client';

import React from 'react';
import CloudUpload from '../Icon/CloudUpload';

function UploadBox() {
	return (
		<div className="w-full bg-[#0C0C0C] flex flex-col items-center justify-center gap-4 p-10 rounded-[15px] border-2 border-transparent cursor-pointer">
			<CloudUpload className="w-10 h-auto" />
			<p className="text-white font-medium">Just drag and drop or upload your file</p>
			<p className="text-gray-400 text-sm">Only PDF documents are supported</p>
		</div>
	);
}

export default UploadBox;
