class YouTubeVideo {
  constructor(id) {
    this.id = id;
    this.thumbnailLoaded = false;
    this.previewLoaded = false;
  }

  loadThumbnail() {
    // 썸네일을 로딩하는 로직(TBD)
    this.thumbnailLoaded = true;
    console.log(`Thumbnail for video ${this.id} loaded.`);
  }

  loadPreview() {
    // 미리보기를 로드하는 로직(TBD)
    this.previewLoaded = true;
    console.log(`Preview for video ${this.id} loaded.`);
  }
}

function createVideoProxy(id) {
  const video = new YouTubeVideo(id);
  
  //비디오 객체를 프록시가 가로챔
  return new Proxy(video, {
    get(target, property) {
      switch(property) {
        case 'thumbnail':
          if (!target.thumbnailLoaded) target.loadThumbnail();
          break;
        case 'preview':
          if (!target.previewLoaded) target.loadPreview();
          break;
        default:
          break;
      }
      return target[property];
    }
  });
}

export default createVideoProxy;
