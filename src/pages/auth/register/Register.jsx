import { useContext, useRef, useState } from "react";
import { Authontication } from "../../../context/AuthContext";
import { useNavigate } from "react-router";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import Swal from "sweetalert2";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const contextValue = useContext(Authontication);
  console.log(contextValue);

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [passwordd, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    if (password.current.value.length < 8) {
      setPassword("Password must be at least 8 characters...");
      return;
    }

    if (password.current.value === confirmPassword.current.value) {
      navigate("/login");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Passwords do not match",
        confirmButtonText: "Try Again",
      });
      return;
    }

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
        navigate("/login");
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
              placeholder="First Name"
              ref={firstName}
              required
            />

            <label htmlFor="" className="mx-1">
              Last Name
            </label>
            <input
              type="text"
              className="form-control p-2  "
              placeholder="Last Name"
              ref={lastName}
              required
            />

            <label htmlFor="" className="mx-1">
              Email
            </label>
            <input
              type="email"
              className="form-control p-2 "
              placeholder="Email"
              ref={email}
              required
            />
            <label htmlFor="" className="mx-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control p-2 "
                placeholder="Password"
                ref={password}
                required
              />

              {passwordd ? (
                <p className="mx-1 text-gray-500">{passwordd}</p>
              ) : null}

              <button
                type="button"
                className="absolute right-4 top-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoIosEyeOff /> : <IoMdEye />}
              </button>
            </div>
            <label htmlFor="" className="mx-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control p-2  "
                placeholder="Confirm Password"
                ref={confirmPassword}
              />

              <button
                className="absolute right-4 top-3 text-gray-600"
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <IoIosEyeOff /> : <IoMdEye />}
              </button>
            </div>
            <button className="bg-[#D9176C] p-2 rounded text-white">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
