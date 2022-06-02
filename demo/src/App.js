import React, { useState } from "react";
import "./App.css";
import { Button } from "ride-ui-kit";
import { Icon } from "ride-ui-kit";
import { Toggle } from "ride-ui-kit";

function App() {
  const [demoToggle, setDemoToggle] = useState(false);

  return (
    <div className={"App"}>
      <div className="container">
        <h1>Ride-UI-Kit</h1>
        <p>A front end component library for Ride Report</p>
        <h2 className="section-header">Icons</h2>
        <div className={"section"}>
          <p>
            ISSUE - currently not able to find the svg by{" "}
            <code>use xlinkHref</code>
          </p>
          <Icon icon="Check" />
        </div>
        <h2 className="section-header">Buttons</h2>
        <div className={"section-flex"}>
          <Button
            disabled
            color={"outline-red"}
            onClick={() => console.log("button pressed")}
          >
            Disabled Button
          </Button>
          <Button
            icon={"Check"}
            color={"gray"}
            onClick={() => console.log("button pressed")}
          >
            W/ Icon
          </Button>
          <Button color={"blue"} onClick={() => console.log("button pressed")}>
            Blue Button
          </Button>
          <Button color={"red"} onClick={() => console.log("button pressed")}>
            Red Button
          </Button>
          <Button
            color={"outline-red"}
            onClick={() => console.log("button pressed")}
          >
            Outine Red Button
          </Button>
        </div>

        <h2 className="section-header">Toggle</h2>
        <div className={"section-flex"}>
          <Toggle
            checked={demoToggle}
            onChange={() => setDemoToggle(!demoToggle)}
            label={demoToggle ? "on" : "off"}
          />
          <Toggle
            checked={false}
            onChange={() => setDemoToggle(!demoToggle)}
            label={"Disabeled"}
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default App;
