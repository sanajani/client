import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { isthereBlog } from "../features/isBlog";


const ProtectedRoute = ({Container}) => {
  const isBlog = useSelector((state) => state.isBlog.isblog);
  const dispatch = useDispatch();

    const [loading,setLoading] = useState(true);
    let history = useNavigate();
  
      const blogSettings = async () => {
          let res = axios.get('http://localhost:8000/blog/isblog');
          let data = await res;
          setLoading(false)
          return data
        }
      useEffect(() => {
          blogSettings().then((data)=>{
          let isblog_setup = data.data.isblog;
          if(isblog_setup){
            dispatch(isthereBlog())
          }
          // setIsBlog(isblog_setup)
          if(isBlog){
            history('/login')
          }
          }).catch((error)=>{
            console.log(error.message);
          });
        }, [isBlog,history,dispatch])
  if(loading){
    return <div><h1>Loading...</h1></div>
  }
  return (
    <div>
        <Container />
    </div>
  )
}

export default ProtectedRoute