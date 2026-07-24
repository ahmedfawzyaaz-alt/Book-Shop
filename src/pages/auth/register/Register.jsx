import { useContext, useRef } from "react";
import { Authontication } from "../../../context/AuthContext";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  const contextValue = useContext(Authontication);
  console.log(contextValue);

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  function handleRegister(e) {
    e.preventDefault();
    let userObject = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
      password_confirmation: confirmPassword.current.value,
    };

    fetch("https://bookstore.eraasoft.pro/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/login")
        console.log(data);
      });
  }

  return (
    <div className="container">
      <div className="row justify-center my-3">
        <div className="col-sm-12 col-md-6 col-lg-5">
          <form
            className=" flex flex-col gap-2 p-2 shadow-md shadow-blue-400 rounded"
            onSubmit={handleRegister}
          >
            <label htmlFor="" className="mx-1">
              First Name
            </label>
            <input
              type="text"
              className="form-control p-2  "
              placeholder="UserName"
              ref={firstName}
            />

            <label htmlFor="" className="mx-1">
              Last Name
            </label>
            <input
              type="text"
              className="form-control p-2  "
              placeholder="Last Name"
              ref={lastName}
            />

            <label htmlFor="" className="mx-1">
              Email
            </label>
            <input
              type="email"
              className="form-control p-2 "
              placeholder="Email"
              ref={email}
            />
            <label htmlFor="" className="mx-1">
              Password
            </label>
            <input
              type="password"
              className="form-control p-2 "
              placeholder="Password"
              ref={password}
            />
            <label htmlFor="" className="mx-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control p-2  "
              placeholder="Confirm Password"
              ref={confirmPassword}
            />
            <button className="bg-[#D9176C] p-2 rounded text-white">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
