import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";

//JSX Crash Course
// const App = () => {
//   const name = "Ngesa";
//   const x = 23;
//   const y = 2;
//   const names = ["Ngesa", "Malick", "Willy", "Virgil"];

//   return (
//     <>
//       <div className="text-red-700 text-4xl">App</div>
//       <p>Hello {name} </p>
//       <p>
//         Multiple of {x} and {y} is {x * y}
//       </p>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
    </>
  );
};

export default App;
