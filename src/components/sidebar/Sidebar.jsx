import React, { useState } from 'react';
import "./sidebar.scss";
import { FaFirstAid, FaUserFriends, FaArrowAltCircleLeft } from "react-icons/fa";
import { AiFillShop, AiFillFlag, AiFillMessage } from "react-icons/ai";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';

const Sidebar = () => {
    const [{user}] = useStateValue();


    return (
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <div className="sidebarInfo">
                    <img src={user.photoURL} alt="" />
                    <span className="userName">{user.displayName}</span>
                </div>
                <div className="sidebarOption">
                    <FaFirstAid className='sideLog' />
                    <span className="sideTitle">COVID-19 Information center</span>
                </div>
                <div className="sidebarOption">
                    <AiFillFlag className='sideLog' />
                    <span className="sideTitle">Pages</span>
                </div>
                <div className="sidebarOption">
                    <FaUserFriends className='sideLog' />
                    <span className="sideTitle">Friends</span>
                </div>
                <div className="sidebarOption">
                    <AiFillMessage className='sideLog' />
                    <span className="sideTitle">Messenger</span>
                </div>
                <div className="sidebarOption">
                    <AiFillShop className='sideLog' />
                    <span className="sideTitle">MarketPlace</span>
                </div>
                <div className="sidebarOption">
                    <ExpandMoreIcon className='sideLog' />
                    <span className="sideTitle">Explore More</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar