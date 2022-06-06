import React, { useState } from "react";
import "./App.css";
import { Button } from "ride-ui-kit";
import { Checkbox } from "ride-ui-kit";
import { Icon } from "ride-ui-kit";
import { Toggle } from "ride-ui-kit";

import logo from "ride-ui-kit/dist/assets/logo.svg";

function App() {
  const [demoToggle, setDemoToggle] = useState(false);
  // const [vehicleType, setVehicleType] = useState("bike");
  return (
    <div className={"App"}>
      <div className="container">
        <div className="header">
          <img
            alt="Ride Report"
            src={logo}
            className="logo full"
            style={{ marginRight: "-162px", height: "42px" }} //Why is this huge gap to the right of the logo here
          />
          <h1>Ride-UI-Kit</h1>
        </div>
        <p>A front end component library for Ride Report</p>
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
            checked={demoToggle}
            onChange={() => setDemoToggle(!demoToggle)}
            label={"Checkbox"}
          />
        </div>
        <h2 className="section-header">Selects</h2>
        <div className={"section-flex"}>
          {/* <VehicleClassPicker
            vehicleClasses={VEHICLE_CLASS_OPTIONS}
            onChange={(vc: string) => setVehicleType(vc)}
            value={vehicleType}
          /> */}
          <code>WIP</code>
        </div>
        <h2 className="section-header">Charts</h2>
        We use recharts (add documention link) as our main charting library. It
        accepts the data format:
        <hr />
        <code>add demo json here</code>
        <h3>simple line chart</h3>
        <p>Add a chart here</p>
        <h3>simple bar chart</h3>
        <p>Add a chart here</p>
        <h2 className="section-header">Fonts</h2>
        set the font for a new react project by importing the font asset from
        the kit.
        <code>
          <p>write code as string here</p>
        </code>
        <h2 className="section-header">Icons</h2>
        <div className={"section-icons"}>
          {IconNames.map((name) => {
            return (
              <div>
                <Icon icon={name} /> {name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const IconNames = [
  "Right",
  "Left",
  "Up",
  "Down",
  "Back",
  "Forward",
  "Fast-Forward",
  "Outbound",
  "Inbound",
  "Double-Right",
  "Double-Left",
  "Close",
  "Check",
  "Refresh",
  "Rewind",
  "Expand",
  "Collapse",
  "Orientation",
  "Plus",
  "Minus",
  "Higher",
  "Lower",
  "More",
  "Hamburger",
  "Report",
  "Fees",
  "Map",
  "MunBoundary",
  "Area",
  "Audit",
  "No-Car",
  "Beta",
  "Navigation-Chart",
  "Policy",
  "Street",
  "Points",
  "Line",
  "Heatmap",
  "Satellite",
  "Trip-End",
  "Trip-Start",
  "Search",
  "Expand",
  "Camera",
  "Collapse",
  "Image",
  "Visibility-On",
  "Visibility-Off",
  "Delete",
  "Download",
  "Upload",
  "Print",
  "Email",
  "Copy-Paste",
  "Drawing",
  "Layer",
  "Pointer",
  "Plus",
  "Calendar",
  "Day",
  "Week",
  "Month",
  /* Social */
  "Facebook",
  "Twitter",
  "LinkedIn",
  /* Content */
  "Car",
  "Bike",
  "Scooter",
  "eBike",
  "Moped",
  "Alert",
  "Information",
  "Time",
  "Circle",
  "Triangle",
  "Stopwatch",
  "Response",
  "Compliant",
  "Non-Compliant",
  "Code",
  "Geography",
  "General",
  "Status",
  "Comment",
  "Missing-File",
  "List-File",
  "Document-Agreement",
  "Document-Privacy",
  "User-Remove",
  "Spreadsheet",
  "Archive",
  "Marker",
  "Sunny",
  "Cloudy",
  "Rainy",
  "Stormy",
  "Battery-66-100",
  "Battery-33-66",
  "Battery-0-33",
  "Battery-Disabled",
  "Fuel-Status-66-100",
  "Fuel-Status-33-66",
  "Fuel-Status-0-33",
  "Fuel-Status-Disabled",
  "United-States",
  "European-Union",
  "United-Kingdom",
  "Germany",
  "France",
  "Spain",
  "Australia",
  "New-Zealand",
];

export default App;
