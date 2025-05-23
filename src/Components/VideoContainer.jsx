import {YOUTUBE_VIDEO_API} from "../Utils/constant.jsx";
import React, {useEffect, useState} from "react";
import VideoCard from "./Videocard.jsx";
import {Link} from "react-router-dom"
const VideoContainer = () =>{
  const [videos,setvideo] = useState([]);

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
<div className = "flex flex-wrap">
      {videos.map((video)=>(
      <Link key = {video.id}  to = {"/watch?v=" + video.id}><VideoCard info = {video} /></Link>  


))}
</div>

)
}
export default VideoContainer
