import React from "react";
import ReactDOM from "react-dom";
import VideoPreview from "../components/youtubeMain";

class YouTubeVideo {
  constructor(id) {
    this.text = "썸네일입니다";
    this.state = false;
    this.id = id;
    this.thumbnailLoaded = null;
    this.previewLoaded = null;
  }

  loadThumbnail() {
    // 썸네일을 로딩하는 로직(TBD)
    console.log("동영상 땡겨오기 중지");
    this.state = false;
    this.thumbnailLoaded = "./rain_thumbnail.png";
  }

  loadPreview() {
    // 미리보기를 로드하는 로직(TBD)
    console.log("동영상 땡겨오는중......");
    this.text = "동영상 재생중~";
    this.state = true;
    console.log(this);
    this.previewLoaded = "./rain.mp4";
  }
}

function createVideoProxy(id) {
  const video = new YouTubeVideo(id);

  //비디오 객체를 프록시가 가로챔
  return new Proxy(video, {
    get(target, property) {
      console.log("get요청 수행중");
      console.log(target);
      console.log(property);
      console.log(target[property]);
      console.log("get요청 끝");
      return target[property];
    },

    set(target, property, value) {
      if (property === "state") {
        target[property] = value;
        if (value === true) {
          target.loadPreview();
        } else {
          target.loadThumbnail();
        }
      } else {
        target[property] = value;
      }
      renderApp();
      return true;
    },
  });
}

function renderApp() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<VideoPreview />, rootElement);
}

export default createVideoProxy;
