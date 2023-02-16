import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-photo-view/dist/react-photo-view.css';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css';
import 'swiper/css';
import App from './App';
import ReviewContext from './Context/ReviewContext';
import UserContext from './Context/UserContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from './router/router';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserContext>
      <ReviewContext>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    <App />
    </ReviewContext>
    </UserContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
