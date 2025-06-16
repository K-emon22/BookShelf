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
import TermsAndConditions from "../Components/Pages/Home/Term/TermsAndConditions";
import PrivateRoute from "../Components/ContextFiles/PrivateRoute";

import Friction from "../Components/Pages/Home/FeatureCAtegorySorted/Friction";
import NonFriction from "../Components/Pages/Home/FeatureCAtegorySorted/NonFriction";
import Fantacy from "../Components/Pages/Home/FeatureCAtegorySorted/Fantacy";
import About from "../Components/Pages/About/About";

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
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBooks",
        element: (
          <PrivateRoute>
            <MyBooks></MyBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/terms&condition",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/fiction",
        element: <Friction></Friction>,
      },
      {
        path: "/nonficton",
        element: <NonFriction></NonFriction>,
      },
      {
        path: "/fantacy",
        element: <Fantacy></Fantacy>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
