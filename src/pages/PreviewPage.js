import React from 'react';

function PreviewPage() {
  return (
    <div className='p-8 max-w-screen-md mx-auto'>
        <h2 className='text-3xl font-bold'>
            Preview Updated Resume
        </h2>
        <p className='mt-4'>Your updated resume will be displayed here .</p>
        <iframe
        src="/path/to/preview"
        className='mt-4 w-full h-96 border rounded-md'
        title="Resume Preview"
        >
        </iframe>
    </div>
  )
}

export default PreviewPage;
