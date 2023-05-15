import React from "react";
import VideoCard from "./videoCard";
import PropTypes from "prop-types";

const VideoPreview = ({ videos }) => {
  return (
    <div>
      {videos.map((videoId) => (
        <>
          <div> ---- </div>
          <VideoCard key={videoId} videoId={videoId} />
          <div> ---- </div>
          <div>.</div>
        </>
      ))}
    </div>
  );
};

export default VideoPreview;

VideoPreview.propTypes = {
  videos: PropTypes.array.isRequired, // videoId prop의 유효성 검사를 추가합니다.
};
