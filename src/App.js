import React from "react";
import youtube from "./api/youtube";
import Searchbar from "./components/Searchbar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = React.useState([])
  const [selectedVideo, setSelectedVideo] = React.useState(null)

  const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })

    setVideos(response.data.items)
    console.log("this is resp", response);
  }

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <div className='ui container' style={{ marginTop: '1em' }}>
      <Searchbar handleFormSubmit={handleSubmit} />
      <div className='ui grid'>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
