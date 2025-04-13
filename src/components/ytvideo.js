import React, { useState } from 'react';

function YTVideo(props) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div class="yt-video">
            {isShown ? <iframe width="560" height="315" src={props.src} title="YouTube video player" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
            : <button onClick={() => {setIsShown(!isShown)}} className="">Load video</button>}
        </div>
    )
}

export default YTVideo;