import React, { useState } from 'react';
import "./creatingpost.scss";
import { AiFillVideoCamera } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { MdAddReaction } from "react-icons/md";
import { addDoc, collection } from 'firebase/firestore';
import { useStateValue } from '../../context/StateProvider';
import db from "../../firebase-config";
import firebase from 'firebase/compat/app';



const CreatingPost = () => {
    const [message, setMessage] = useState("");
    const [keyword, setKeyword] = useState("");

    const [{user}] = useStateValue();

    const handleSubmit = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: keyword
        })

        setMessage("");
        setKeyword("");
    };


    return (
        <div className='createContainer'>
            <div className="createWrapper">
                <div className="createTop">
                    <div className="topLeft">
                        <img src={user.photoURL} alt="" />
                        <input 
                            type="text" 
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            className='topLeftInput' 
                            placeholder={`What's on your mind ${user.displayName}?`}
                        />
                    </div>
                    <div className="topRight">
                        <input 
                            type="text" 
                            value={keyword}
                            onChange={(e)=>setKeyword(e.target.value)}
                            className='topRightInput'    
                            placeholder="Keyword for Gif"
                        />
                    </div>
                </div>
                <div className="createBottom">
                    <div className="bottomOption">
                        <AiFillVideoCamera className='bottomLogo1' />
                        <span className="bottomText">Live Video</span>
                    </div>
                    <div className="bottomOption">
                        <FaPhotoVideo className='bottomLogo2' />
                        <span className="bottomText">Photo/Video</span>
                    </div>
                    <div className="bottomOption">
                        <MdAddReaction className='bottomLogo3' />
                        <span className="bottomText">Feeling/Activity</span>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className='submitBtn'
                >
                    POST
                </button>
            </div>
        </div>
    )
}

export default CreatingPost