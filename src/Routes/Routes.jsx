import {createBrowserRouter} from "react-router";
import Root from "../Components/RouterFiles/Root";
import HomePage from "../Components/Pages/Home/HomePaga/HomePage";

import AddBook from "../Components/Pages/AddBook/AddBook";

import MyBooks from "../Components/Pages/MyBooks/MyBooks";
import Profile from "../Components/Pages/Profile/Profile";
import Bookshelf from "../Components/Pages/Bookshelf/Bookshelf";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import Error from "../Components/Error/Error";
import DetailsPage from "../Components/DetailsPage/DetailsPage";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {path: "/bookshelf", element: <Bookshelf></Bookshelf>},
      {
        path: "/addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/myBooks",
        element: <MyBooks></MyBooks>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/bookDetails/:id",
        element: <DetailsPage></DetailsPage>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
