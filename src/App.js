import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/login";
import Home from "./components/home/Home";


const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },

]);


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
