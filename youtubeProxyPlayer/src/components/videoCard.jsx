import React from "react";
import PropTypes from "prop-types";
import createVideoProxy from "../class/youtube";

const VideoCard = ({ videoId }) => {
  const videoProxy = createVideoProxy(videoId);

  const handleMouseOver = () => {
    videoProxy.state = true;
  };
  const handleMouseOut = () => {
    videoProxy.state = false;
  };

  return (
    <div>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        key={videoId}
      >
        {videoProxy.text}
      </div>
    </div>
  );
};
export default VideoCard;

VideoCard.propTypes = {
  videoId: PropTypes.string.isRequired, // videoId prop의 유효성 검사를 추가합니다.
};
