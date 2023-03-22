import './ShowSinglePost.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const ShowSinglePost = () => {
  const { slug } = useParams();
  const [postData, setPostData] = useState(null);

  const getSinglePost = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/post/getpost/${slug}`)
      let data = res?.data?.post
      setPostData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getSinglePost()
    document.title = slug
  }, [slug])
  console.log(postData);
  if (!postData) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="singlePostContainer">
      <h1>{postData.postTitle}</h1>
      <div className="image">
        <img src={`http://localhost:8000${postData.postImage}`} alt="" />
      </div>
      <h2>{postData.postSummary}</h2>
      <section>
        <div dangerouslySetInnerHTML={{ __html: postData.postContent }}></div>
      </section>
    </div>
  )
}

export default ShowSinglePost


