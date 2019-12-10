import React from "react";
import "./Social.scss";
import { Timeline } from "react-twitter-widgets";

const Social = () => {
  return (
    <div className="Social_Container">
      <div className="Facebook"></div>
      <div class="Twitter">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "celmatespodcast"
          }}
        />
      </div>
    </div>
  );
};

export default Social;
