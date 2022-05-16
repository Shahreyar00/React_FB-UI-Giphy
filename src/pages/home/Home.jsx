import React from 'react';
import Feed from '../../components/feed/Feed';
import Header from '../../components/header/Header';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.scss";

const Home = () => {
    return (
        <div className="homeContainer">
            <Header />
            <div className="homeBody">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </div>
    )
}

export default Home