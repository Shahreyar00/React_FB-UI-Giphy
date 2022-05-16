import React, { useEffect, useState } from 'react';
// import p1 from "../assets/p1.jpg"
// import { FaRegThumbsDown, FaRegThumbsUp, FaRegTrashAlt } from "react-icons/fa";
// import { BsShare } from "react-icons/bs";
import "./posts.scss";
import Post from '../post/Post';
import db from '../../firebase-config';


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>
            setPosts(snapshot.docs.map((doc)=>({ id:doc.id, data:doc.data() })))
        );
    },[]);

    
    return (
        <div className="postsContainer">
                {posts.map((post)=>(
                    <Post 
                        key={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        keyword={post.data.image}
                    />
                ))}
                
                {/* <Post 
                    author="Shahreyar" 
                    message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    keyword="fire"
                />
                <Post 
                    author="Vashu" 
                    message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    keyword="ice"
                />
                <Post 
                    author="Abhishek" 
                    message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    keyword="snow"
                /> */}
        </div>
    )
}

export default Posts