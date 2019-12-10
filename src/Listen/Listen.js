import React from "react";
import "./Listen.scss";

const Listen = () => {
  return (
    <div className="Iframe_Container">
      <iframe
        class="PodcastPlayer"
        title="podcastPlayer"
        src="https://player.pippa.io/5bccbedb901d25246f778245?theme=default&latest=1"
        frameBorder="0"
        width="100%"
        height="100%"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Listen;
