import { Button } from "ride-ui-kit";

function App() {
  return (
    <>
      <h1>Ride-UI-Kit</h1>
      <p>A front end component library for Ride Report</p>
      <hr />
      <h2>Buttons</h2>
      <Button
        disabled
        color={"outline-red"}
        onClick={() => console.log("button pressed")}
      >
        Disabled Button
      </Button>
      <Button color={"gray"} onClick={() => console.log("button pressed")}>
        Gray Button
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

      <hr />
      <h2>Colors</h2>
    </>
  );
}

export default App;
