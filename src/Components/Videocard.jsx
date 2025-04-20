const VideoCard = ({info}) =>{
   if (!info) {
    return null; // or a loader or placeholder
  }
  console.log(info)
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;

  return(
  <div className = "p-2 w-72 m-2 shadow-lg">
     <img className = "rounded-lg" src = {thumbnails.medium.url} alt = {title} /> 
      <ul>
        <li className = "font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>

      </ul>
  </div>
  )
}
export default VideoCard; 
