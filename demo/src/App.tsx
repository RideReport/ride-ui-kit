import React, { useState } from "react";
import "./App.css";
import { Button, Checkbox, Icon, Toggle } from "ride-ui-kit";

import logo from "ride-ui-kit/dist/assets/logo.svg";
import RRlogo from "ride-ui-kit/dist/assets/ride_report.png";

function App() {
  const [demoToggle, setDemoToggle] = useState(false);
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
        <p>A front end component library for Ride Report.</p>
        <p>
          This demo site not only serves as live documentation for engineers, it
          also serves as a place to locally develop front end components in a
          React application. See the{" "}
          <a href={"https://github.com/RideReport/ride-ui-kit"}>
            documentation
          </a>{" "}
          to start developing.
        </p>
        <h2 className="section-header">Buttons</h2>
        {/* <div><Loading loading={true} kind="blue" size={2} /></div> */}
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
            Icon
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
            Outline Red
          </Button>
          <Button onClick={() => console.log("button pressed")} loading>
            Loading
          </Button>
        </div>
        <h2 className="section-header">Toggles</h2>
        <div className={"section-flex"}>
          <Toggle
            checked={demoToggle}
            onChange={() => setDemoToggle(!demoToggle)}
            label={demoToggle ? "On" : "Off"}
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
            color={"#ff851a"}
          />
        </div>
        <h2 className="section-header">Charts</h2>
        <span>
          We use <a href={"https://recharts.org/en-US/"}>ReCharts</a> as our
          main charting library. It accepts data in the format:
        </span>
        <div className="section-code">
          <code>add example data here</code>
        </div>
        <h3>Simple line chart</h3>
        <div className="section-code">
          <code>wip</code>
        </div>
        <h3>Simple bar chart</h3>
        <div className="section-code">
          <code>wip</code>
        </div>
        <h2 className="section-header">Fonts & Assets</h2>
        <p>
          Set the font for a new react project by importing the font asset from
          the kit.
        </p>
        <p>
          Import common assets by providing the path to the assets folder in the
          component library
        </p>
        <strong>Example:</strong>
        <div className="section-code">
          <code>
            import RRlogo from "ride-ui-kit/dist/assets/ride_report.png"
          </code>
        </div>
        <div>
          <img
            alt="Ride Report"
            src={RRlogo}
            className="logo full"
            style={{ height: "48px" }} //Why is this huge gap to the right of the logo here
          />
        </div>
        <h2 className="section-header">Icons</h2>
        <div className={"section-icons"}>
          {IconNames.map((name, i) => {
            return (
              <div>
                <Icon key={i} icon={name} /> {name}
              </div>
            );
          })}
        </div>
        <h2 className="section-header">Overriding Styles</h2>
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
