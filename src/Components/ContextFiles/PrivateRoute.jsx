import React, {useContext} from "react";

import {Navigate, useLocation} from "react-router";

import Loder from "../Loder/Loder";

import {AuthContext} from "./AuthContext";
const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loder></Loder>;
  } else if (!user) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }
  return children;
};

export default PrivateRoute;
