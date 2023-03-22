import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [allPost, setallPost] = useState([])
    // const [image,setImage] = useState('')
    const getAllPost = async () => {
        const res = await axios.get('http://localhost:8000/post/get')
        const data = await res.data
        setallPost(data.posts)
    }
    useEffect(() => {
        getAllPost()
    }, [])

    console.log(allPost);
    return (
        <>
            <Header />
            {/* <div className='postsContainer'>
                <div className="postContainer container">
                    <div className="singlepost">
                        <div className="postImg">
                            <img src="./assets/img1.jpg" alt="" />
                        </div>
                        <div className="postInfo">
                            <h1>Hello from something new for you dear friend</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit cum dolorem similique eaque, sapiente eius odio, aperiam dignissimos libero beatae nihil quidem tenetur quod culpa voluptatum facere earum repellat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit cum dolorem similique eaque.</p>
                            <div className="posterInfo">
                                <div className="right">
                                    <span>Date:  2023/2/9</span>
                                    <span>Author:  Sanaullah</span>
                                </div>
                                <div className="left">
                                    Read More<span> +</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className='number number-1'>1</span>
                </div>
            </div> */}

            {
                allPost.map((eachPost, postIndex) => {
                    const { postTitle, postSummary, postImage, createdAt,slug } = eachPost;
                    
                    return  <div className='postsContainer' key={postIndex}>
                            <div className="postContainer container">
                            <Link to={`/blogpost/${slug}`}>
                                <div className="singlepost">

                                    <div className="postImg">
                                        <img src={`http://localhost:8000${postImage}`} alt="" />
                                    </div>
                                    <div className="postInfo">
                                        <h1>{postTitle}</h1>
                                        <p>{postSummary}</p>
                                        <div className="posterInfo">
                                            <div className="right">
                                                <span>Date:  {createdAt}</span>
                                                <span>Author:  Sanaullah jan</span>
                                            </div>
                                            <div className="left">
                                                Read More<span> +</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
            </Link>
                                <span className='number number-1'>{postIndex + 1}</span>
                            </div>
                        </div>
                })
            }
        </>
    )
}

export default Home