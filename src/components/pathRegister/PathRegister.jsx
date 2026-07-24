import Cookies from "js-cookie";
import ErrorPage from "../../pages/error/Error";
import Register from "../../pages/auth/register/Register";
import { Children } from "react";

export default function PathRegister({Children}) {
  const token = Cookies.get("token");
  if (token) {
    return <ErrorPage />;
  } else {
    return <Register />;
  }
  return <div>
    {Children}
  </div>;
}
