// index.js or main.jsx

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import './index.css';
import App from "./routes/App.jsx";
import Bag from "./routes/Bag.jsx"; 
import Home from "./routes/Home.jsx";
import myntrastore from './Store/index.js';
import { Provider } from 'react-redux'; 
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/bag', element: <Bag /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntrastore}>
    <RouterProvider router={router} />
    </Provider> 
  </StrictMode>
);
