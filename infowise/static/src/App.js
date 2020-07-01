import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";

import TitleBar from "./Components/TitleBar";
import ThirdParty from "./Components/ThirdParty";
import { Input, Typography, Tabs, Card } from "antd";

import { Progress } from "antd";

const { Search } = Input;
const { TabPane } = Tabs;
const { Title } = Typography;
const { Paragraph } = Typography;
const electron = window.require("electron");

const ipcRenderer = electron.ipcRenderer;

function ResultTitle({ programState }) {
  if (programState == "Idle") {
    return (
      <>
        <Title level={3}>Awaiting Input</Title>
        <Paragraph>Please enter an IP to analyze</Paragraph>
      </>
    );
  } else if (programState == "Detecting") {
    return (
      <>
        <Title level={3}>Detecting</Title>
        <Paragraph>Fetching data from third party sources</Paragraph>
      </>
    );
  } else if (programState == "Bad") {
    return (
      <>
        <Title type="danger" level={3}>
          VPN/Proxy Detected
        </Title>
        <Paragraph>This IP is a VPN/Proxy</Paragraph>
      </>
    );
  } else {
    return (
      <>
        <Title level={3}>Good Ip</Title>
        <Paragraph>A VPN or Proxy was not detected</Paragraph>
      </>
    );
  }
}

function App() {
  function callback(key) {
    console.log(key);
  }

  let [programState, updateProgramState] = useState("Idle");
  let [ip, updateIp] = useState("");
  let [score, updateScore] = useState(0);
  let [thirdPartData, updateThirdPartyData] = useState([]);

  useEffect(() => {
    ipcRenderer.on("thirdPartyData", (e, data) => {
      updateThirdPartyData(data);
      console.log(data);
      let average = data.reduce((acum, cur) => acum + cur.score, 0);
      average = (average / data.length).toFixed(0);
      updateScore(average);
      if (average > 50) {
        updateProgramState("Bad");
      } else {
        updateProgramState("Good");
      }
    });
  }, []);

  return (
    <div>
      <TitleBar />
      <div className="App">
        <div className="ipBox">
          <div>
            <Title level={3}>Proxy VPN Check</Title>
            <Paragraph className="subtitle">
              Start a comprehensive check to determine where the given IP is a
              VPN or Proxy
            </Paragraph>
          </div>
          <Search
            placeholder="127.0.0.1"
            loading={programState == "Detecting" ? true : false}
            enterButton
            onSearch={(value) => {
              updateIp(value);
              updateProgramState("Detecting");
              ipcRenderer.send("thirdPartyRecon", value);
            }}
          />
        </div>

        <div className="info">
          <Tabs defaultActiveKey="2" onChange={callback}>
            <TabPane tab="Third Party Analysis" key="2">
              <ThirdParty data={thirdPartData} />
            </TabPane>
            <TabPane tab="WHOIS Analysis" key="1">
              Coming Soon
            </TabPane>
          </Tabs>
        </div>
        <div className="result">
          <Card bordered={true} style={{ width: "100%" }}>
            <div className="result">
              <div>
                <Progress
                  type="circle"
                  percent={score}
                  width={80}
                  status={score > 65 ? "exception" : ""}
                  format={(percent) => percent + "%"}
                />
              </div>
              <div>
                <ResultTitle programState={programState} />
              </div>
              <div>
                <Title level={3}>{ip}</Title>
                <Paragraph>Infowise Beta 0.1</Paragraph>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
