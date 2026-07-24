import { Children, useContext } from "react";
import { Authontication } from "../../context/AuthContext";
import ErrorPage from "../../pages/error/Error";
import SingleProduct from "../../pages/singleProduct/SingleProduct";

export default function ParentSingel({ children }) {
  const { token } = useContext(Authontication);
  if (!token) {
    return <ErrorPage />;
  } else {
    return <SingleProduct />;
  }
  return <div>{Children}</div>;
}
