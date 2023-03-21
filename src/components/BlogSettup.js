import './BlogSettup.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const BlogSettup = () => {

  const history = useNavigate();

  const [value,setValue] = useState({
    name:'',
    email:'',
    password:'',
    blogTitle:'',
    blogDesc:''
  });

  const inputValues = (e) => {
    setValue({...value, [e.target.name]:e.target.value})
  }

  const createBlog = async (e) => {
    e.preventDefault();
    let res = axios.post('http://localhost:8000/blog/blog-setup',{
      blogTitle : value.blogTitle,
      blogDesc : value.blogDesc,
      name: value.name,
      email: value.email,
      password: value.password
    },)
    let data = await res
    console.log(data.data.message);
    
    history('/user/login/login/login');

    setValue({
      name:'',
      email:'',
      password:'',
      blogTitle:'',
      blogDesc:''
    })
  }
  return (
    <div className='blogsettupContainer'>
        <form onSubmit={createBlog}>
        <h1>blog Settings</h1>
            <input required onChange={inputValues} value={value.blogTitle} type="text" name='blogTitle' placeholder='Enter your blog Title' />
            <textarea required onChange={inputValues} value={value.blogDesc} name="blogDesc" placeholder='Enter your blog Description'  id="textarea" ></textarea>
            <h2>ADMIN INFORMATION</h2>
            <input required onChange={inputValues} value={value.name} type="text" name='name' placeholder='  Enter Admin Name...' />
            <input required onChange={inputValues} value={value.email} type="email" name='email' placeholder='Enter Admin Email...' />
            <input required onChange={inputValues} value={value.password} type="password" name='password' placeholder='Enter Admin Password...' />
            <button>Create Blog</button>
        </form>
    </div>
  )
}

export default BlogSettup