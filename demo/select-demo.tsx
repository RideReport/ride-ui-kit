// import React, { useState } from "react";
// import { Select } from "ride-ui-kit";

// const VEHICLE_CLASS_OPTIONS = ["Bike", "Car", "Ebike", "Moped", "Scooter"];

// const vehicleClassOptions = [
//   {
//     value: null,
//     label: "All vehicles (5)",
//     icon: null,
//   },
//   {
//     value: "bike",
//     label: "Bikes",
//     icon: "Bike",
//   },
//   {
//     value: "car",
//     label: "Cars",
//     icon: "Car",
//   },
//   {
//     value: "ebike",
//     label: "E-Bikes",
//     icon: "eBike",
//   },
//   {
//     value: "moped",
//     label: "Mopeds",
//     icon: "Moped",
//   },
//   {
//     value: "scooter",
//     label: "Scooters",
//     icon: "Scooter",
//   },
// ];

// const allVehiclesOption = {
//   icon: null,
//   label: "All vehicles (5)",
//   value: null,
// };

// const getVehicleClassOption = (vc: string) => {
//   return {
//     value: vc,
//     label: VEHICLE_CLASS_OPTIONS[vc],
//     icon: VEHICLE_CLASS_OPTIONS[vc],
//   };
// };

// /** A vehicle class selector that requires the state to be manage by the component
//  * rendering this selector.
//  */
// function VehicleClassPicker({ vehicleClasses, onChange, value }) {
//   const allVehiclesOption = {
//     value: null,
//     label: `All Vehicles ${vehicleClasses.length}`,
//     icon: null,
//   };

//   console.log("allVehiclesOption", allVehiclesOption);

//   const vehicleClassOptions = [
//     allVehiclesOption,
//     ...VEHICLE_CLASS_OPTIONS.map((vc: string) => vc),
//   ];

//   console.log("vehicleClassOptions", vehicleClassOptions);

//   return (
//     <Select
//       onChange={(option: { value: any }) => onChange(option?.value ?? null)}
//       value={value != null ? getVehicleClassOption(value) : allVehiclesOption}
//       options={vehicleClassOptions}
//       // components={{
//       //   Option: OptionWithIcon,
//       //   SingleValue: SingleValueWithIcon,
//       // }}
//       styles={{
//         option: (base: any, { isDisabled }: any) => ({
//           ...base,
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           cursor: isDisabled ? "default" : "pointer",
//         }),
//         singleValue: (base: any) => ({
//           ...base,
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "flex-start",
//         }),
//       }}
//     />
//   );
// }
