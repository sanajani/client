import './CreatePost.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';


const modules = {
  toolbar: [
    [{ 'header': [1, 2 , 3 , 4 , false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];





const CreatePost = () => {

  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files,setFiles] = useState('');

  const createNewPost = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.set('title',title)
    data.set('summary',summary);
    data.set('content',content);
    data.set('file',files[0])
    const res = await fetch('http://localhost:8000/post',{
      method:"POST",
      body:data
    })
    await res.json();
    data.delete('title',title)
    data.delete('summary',summary);
    data.delete('content',content);
    data.delete('file',files[0])
    setTitle('')
    setContent('')
    setSummary('')
  }

  return (
    <div className='createpost'>
      <div className="createPostContainer container">
      <form onSubmit={createNewPost} >
        <h1>Create Post</h1>
{/* title */}
            <input type="text"
            value={title}
            name='title' 
            placeholder='Title' 
            onChange={e => setTitle(e.target.value)} />
{/* summary */}
<textarea    name='summary' 
            value={summary} 
            placeholder='Summary' onChange={e => setSummary(e.target.value)} ></textarea>

            {/* file  */}
            <input type="file"
            name='file'
            onChange={(e) => setFiles(e.target.files)}
            placeholder='Upload an Image' />
{/* text area */}
            <ReactQuill 
            value={content} 
            modules={modules} 
            formats={formats} 
            // readOnly={true}
            onChange={setContent} />
{/* Button */}
            <button>Create Post</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost