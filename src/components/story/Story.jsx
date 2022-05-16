import React from 'react';
import "./story.scss";

const Story = ({ backsrc, profilesrc, title }) => {
    return (
        <div className="storyContainer">
            <div className="storyWrapper">
                <img src={backsrc} alt="" className="storyBackground" />
                <img src={profilesrc} alt="" className="profilepic" />
                <span className="storyTitle">{title}</span>
            </div>
        </div>
    )
}

export default Story