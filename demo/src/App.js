import React, { useState } from "react";
import "./App.css";
import { Button, Checkbox } from "ride-ui-kit";
import { Icon } from "ride-ui-kit";
import { Toggle } from "ride-ui-kit";
import logo from "ride-ui-kit/dist/public/assets/logo.svg";

function App() {
  const [demoToggle, setDemoToggle] = useState(false);

  return (
    <div className={"App"}>
      <div className="container">
        <div className="header">
          <img
            alt="Ride Report"
            src={logo}
            class="logo full"
            style={{ marginRight: "-162px", height: "42px" }} //Why is this huge gap to the right of the logo here
          />
          <h1>Ride-UI-Kit</h1>
        </div>

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
            icon={"Camera"}
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

        <h2 className="section-header">Toggles</h2>
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
          <Checkbox
            checked={false}
            onChange={() => setDemoToggle(!demoToggle)}
            label={"Checkbox"}
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default App;
