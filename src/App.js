// Main imports
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

// Layout with nested routes
const AppLayout = () => {
  return (
    <div className="app">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Header />
      <Outlet />
    </div>
  );
};

// Routes
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      errorElement:<Error/>,
      children: [
        { path: '', element: <Body /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
         { path: '/restaurants/:resId', element: <RestaurantMenu /> }
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);


// Render
const root = ReactDOM.createRoot(document.getElementById("cmpRoot"));
root.render(<RouterProvider router={router} />);
