/**
 * @description - Main app component 
 */

import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Header from "./src/components/Header";
import Home from "./src/components/Home";
import CartList from "./src/components/Cart";
import Error from "./src/components/Error";
import store from "./src/utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <App />,
  errorElement: <Error />,
},
{
    path: "/cart",
    element: <CartList />,

},
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
