import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostRequestStarted,
  fetchPostSuccess,
  fetchPostfailure,
} from "../redux/action/postActions.js";

const Post=()=>{



    const {loader,data,error}=useSelector(state=>state)
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostRequestStarted());

    async function getData() {
      try {
        const result = await axios.get(
          "https://gauravgitacc.github.io/postAppData/posts.json"
        );
        dispatch(fetchPostSuccess(result.data));
      } catch (error) {
        dispatch(fetchPostfailure(error.message));
      }
    }

    getData();
  }, [dispatch]);





    return (
        <div>
            {
                data&&data.map((item,index)=>(
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Post;