import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import VideoPreview from "./components/youtubeMain";
import "./App.css";

function App() {
  const videos = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>유튜브입니다</h1>
      <VideoPreview videos={videos} />
    </>
  );
}

export default App;
