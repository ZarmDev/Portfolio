import React, { useState } from 'react';

function Video(props) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div class="yt-video">
            {isShown ? <video width="520" height="360" controls><source src={props.src}></source></video>
            : <button onClick={() => {setIsShown(!isShown)}} className="">Load video</button>}
        </div>
    )
}

export default Video;