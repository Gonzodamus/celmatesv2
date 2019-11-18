import React from "react";

const Social = () => {
  return (
    <div>
      <div className="Facebook"></div>
      <div class="Twitter">
        <a
          class="twitter-timeline"
          data-height="800"
          data-dnt="true"
          data-theme="light"
          data-link-color="#2B7BB9"
          href="https://twitter.com/celmatespodcast?ref_src=twsrc%5Etfw"
        >
          Tweets by celmatespodcast
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
  );
};

export default Social;
