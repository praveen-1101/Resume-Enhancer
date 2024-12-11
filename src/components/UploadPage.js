import React, {useState} from 'react'

const UploadPage = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [resumeFile, setResumeFile] = useState(null);

    const handleSubmit = () => 
    {
        console.log('Job Description: ', jobDescription);
        console.log('Resume File: ', resumeFile);
        //Logic for file uploading an processing the resume will go here
    }
    
    const handleFileChange = (e) => 
    {
            setResumeFile(e.target.files[0])
    }

  return (
    <div className='p-8 max-w-screen-md mx-auto'>
        <h2 className='text-3xl font-bold'>Upload Your Resume</h2>
        <textarea
        placeholder='Enter job Description'
        className='border p-2 w-full mt-4 rounded-md'
        value={jobDescription}
        onChange={ e => setJobDescription(e.target.value)}
        >
        </textarea>
        <input
        type="file"
        accept='.pdf,.docx'
        className="mt-4 block w-full"
        onChange={handleFileChange}
        />
        <button
        className='bg-blue-500 text-white p-2 mt-4 rounded-md'
        onClick={handleSubmit}
        >
            Submit
        </button>
    </div>
  )
}

export default UploadPage;
