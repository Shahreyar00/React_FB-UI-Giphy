import React from 'react';
import "./header.scss";
import { FaFacebook, FaSearch, FaHome, FaYoutube, FaUserFriends } from "react-icons/fa";
import { AiFillShop, AiFillFlag } from "react-icons/ai";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { auth } from "../../firebase-config";
import { useStateValue } from '../../context/StateProvider';

const Header = () => {
    const [{user}] = useStateValue();

    return (
        <div className="headerContainer">
            <div className="headerWrapper">
                <div className="headerLeft">
                    <div className="headerLogo">
                        <FaFacebook className='log' />
                    </div>
                    <div className="headerInput">
                        <FaSearch />
                        <input 
                            type="text" 
                            placeholder="Search Facebook"    
                        />
                    </div>
                </div>
                <div className="headerMiddle">
                    <div className="headerOption headerOptionActive">
                        <FaHome className='himg' />
                    </div>
                    <div className="headerOption">
                        <AiFillFlag className='himg' />
                    </div>
                    <div className="headerOption">
                        <FaYoutube className='himg' />
                    </div>
                    <div className="headerOption">
                        <AiFillShop className='himg' />
                    </div>
                    <div className="headerOption">
                        <FaUserFriends className='himg' />
                    </div>
                </div>
                <div className="headerRight">
                    <div className="headerInfo">
                        <div className="avatar">
                            <img src={user.photoURL} alt="" />
                        </div>
                        <h4 className="headerInfoName">{user.displayName}</h4>
                        <span className="headerIcon">
                            <AddIcon />
                        </span>
                        <span className="headerIcon">
                            <ForumIcon />
                        </span>
                        <span className="headerIcon">
                            <NotificationsActiveIcon />
                        </span>
                        <span className="headerIcon">
                            <ExpandMoreIcon />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header