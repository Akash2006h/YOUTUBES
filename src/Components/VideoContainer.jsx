import {YOUTUBE_VIDEO_API} from "../Utils/constant.jsx";
import React, {useEffect, useState} from "react";
import VideoCard from "./Videocard.jsx";
const VideoContainer = () =>{
  const [video,setvideo] = useState([]);

useEffect(()=>{
      getVideos();
    },[])
  const getVideos = async() =>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.items)
    setvideo(json.items)
  }
return(
<> <VideoCard info = {video[0]} /> </>
)
}
export default VideoContainer
