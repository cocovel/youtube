import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import "./app.css";

function App() {
  const [video, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyACNMTwA048c1EtPbxSuZ5li7G0kQWNx9o",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log("error", error));
  }, []);
  return <VideoList key={video.id} video={video} />;
}

export default App;
