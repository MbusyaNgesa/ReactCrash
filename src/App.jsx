import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
