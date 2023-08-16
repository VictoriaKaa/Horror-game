import React from 'react';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import MainPath from './pages/MainPath/MainPath';
import EndPage from './pages/EndPage/EndPage';
import ErrorPage from './features/ErrorPage/ErrorPage';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/main",
    element: <MainPath />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/end",
    element: <EndPage />,
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
