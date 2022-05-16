import React from 'react';
import { FaRegThumbsDown, FaRegThumbsUp, FaRegTrashAlt } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import useFetch from "../../hooks/useFetch";

const Post = ({ profilePic, message, timestamp, username, keyword }) => {
    const gifUrl = useFetch({ keyword });
    const backupUrl = "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


    return (
        <div>
            <div className="postCard">
                    <div className="postCardWrapper">
                        <div className="postCardTop">
                            <img src={profilePic} alt="" />
                            <div className="postCardInfo">
                                <span className="cardName">{username}</span>
                                <span className="cardTimestamp">{(new Date(timestamp?.toDate()).toUTCString()).slice(0,14)}</span>
                            </div>
                        </div>
                        <div className="postCardMiddle">
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo eos eaque officiis libero, expedita consequatur cupiditate, 
                            temporibus recusandae consequuntur et amet saepe, placeat quidem optio suscipit porro! Doloribus, sint! */}
                            {message}
                        </div>
                        <div className="postCardBottom">
                            <img src={gifUrl||backupUrl} alt="" />
                        </div>
                        <div className="postCardFooter">
                            <div className="footerInteract">
                                <FaRegThumbsUp className='footerLogo' />
                                <FaRegThumbsDown className='footerLogo' />
                                <BsShare className='footerLogo' />
                            </div>
                            {/* <button
                                className="footerDelete"
                            >           
                                <FaRegTrashAlt className='trashBtn' />
                            </button> */}
                        </div>
                    </div>                
                </div>
        </div>
    )
}

export default Post