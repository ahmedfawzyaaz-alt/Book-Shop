import { useContext } from "react";
import { Authontication } from "../../context/AuthContext";
import ErrorPage from "../../pages/error/Error";
import Login from "../../pages/auth/login/Login";

export default function LoginError({ children }) {
  const { token } = useContext(Authontication);
  if (!token) {
    return <Login />;
  } else {
    return <ErrorPage />;
  }
  return <div>{children}</div>;
}
