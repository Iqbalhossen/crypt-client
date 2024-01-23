import React from "react";
import { Navigate, useLocation } from "react-router-dom";
const VerifiedEmailRoute = ({ children }) => {
  const location = useLocation();
  let userId = localStorage.getItem("ID");
  const user = JSON.parse(userId);
  function getCookie(name) {
    const cookieValue = document.cookie.match(
      `(^|;)\\s*${name}\\s*=\\s*([^;]+)`
    );
    return cookieValue ? cookieValue.pop() : "";
  }

  let token = getCookie("token");

  if (!token) {
    return <Navigate to="/login" sate={{ from: location }} replace></Navigate>;
  } else {
    if (user && user._id && user.is_verified === false) {
      return children;
    } else {
      <Navigate to="/account"></Navigate>;
    }
    return children;
  }
};

export default VerifiedEmailRoute;
