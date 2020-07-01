import React from "react";
import { DingdingOutlined } from "@ant-design/icons";
import { Typography, TimePicker } from "antd";

import "./../assets/TrafficLights.scss";

const { Title } = Typography;
function TitleBar() {
  return (
    <div className="title-bar">
      <DingdingOutlined style={{ fontSize: "30px", color: "#ffffff" }} />
      <Title level={3} style={{ color: "#ffffff" }}>
        InfoWise{" "}
      </Title>

      <div class="actions focus">
        <div class="traffic-lights focus">
          <button class="traffic-light traffic-light-close" id="close"></button>
          <button
            class="traffic-light traffic-light-minimize"
            id="minimize"
          ></button>
          <button
            class="traffic-light traffic-light-maximize"
            id="maximize"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
