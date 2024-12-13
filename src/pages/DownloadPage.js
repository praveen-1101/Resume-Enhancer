import React from 'react'

function DownloadPage() {
  return (
    <div className='p-8 max-w-screen-md mx-auto'>
      <h2 className='text-3xl font-bold'>Download your Updated Resume</h2>
      {/* <button className='bg-blue-500 text-white p-2 mt-4 rounded-md'>Download ad PDF</button>
      <button className='bg-green-500 text-white p-2 mt-4 ml-4 rounded-md'>Download ad DOCX</button> */}
      <a href="https://localhost:5000/download/resume.pdf" download className='bg-blue-600 text-white p-2 mt-4 inline-block'>Download PDF</a>
    </div>
  )
}

export default DownloadPage;
