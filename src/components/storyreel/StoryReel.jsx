import React from 'react';
import Story from '../story/Story';
import "./storyreel.scss";
import p0 from "../assets/p0.jpg"
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"

const StoryReel = () => {
    return (
        <div className="storyReelContainer">
            <div className="storyReelWrapper">
                <Story 
                    backsrc={p0}
                    profilesrc="https://material-ui.com/static/images/avatar/1.jpg"
                    title="Jim Browning"
                /> 
                <Story 
                    backsrc={p1}
                    profilesrc="https://material-ui.com/static/images/avatar/2.jpg"
                    title="Daniel Ricciardo"
                /> 
                <Story 
                    backsrc={p2}
                    profilesrc="https://material-ui.com/static/images/avatar/3.jpg"
                    title="Susie Wolff"
                />
                <Story 
                    backsrc={p3}
                    profilesrc="https://material-ui.com/static/images/avatar/4.jpg"
                    title="Jane Doe"
                />
                <Story 
                    backsrc={p4}
                    profilesrc="https://material-ui.com/static/images/avatar/5.jpg"
                    title="Sergio Perez"
                />
            </div>
        </div>
    )
}

export default StoryReel