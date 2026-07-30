import { useContext, useRef, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { Authontication } from "../../../context/AuthContext";
import { Bounce, toast } from "react-toastify";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { token, setToken } = useContext(Authontication);

  const handelLogin = (e) => {
    e.preventDefault();
    let tokenObject = {
      email: email.current.value,
      password: password.current.value,
    };

    fetch("https://bookstore.eraasoft.pro/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tokenObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToken(data.data.token);
        Cookies.set("token", data.data.token, { expires: 7 });
        localStorage.setItem("user", JSON.stringify(data.data.user));
        navigate("/");

        toast.success("Log In Is successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div>
      <div className="text-center my-2 text-[#D9176C]">
        <p>Welcome Back!</p>
      </div>
      <div className="flex justify-center my-3">
        <form
          className="flex flex-col md:w-[55%] w-[90%] lg:w-[40%]  p-3 rounded gap-2"
          onSubmit={handelLogin}
        >
          <div className="flex flex-col">
            <label htmlFor="" className="px-1">
              Email
            </label>
            <input
              type="email"
              className="border p-2 rounded-lg outline-0"
              placeholder="Email"
              ref={email}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="px-1">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="border p-2 rounded-lg w-full outline-0"
                placeholder="Enter Password"
                ref={password}
                required
              />

              <button
                className="absolute top-3 right-4 text-gray-600"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoIosEyeOff /> : <IoMdEye />}
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <p className="m-0">Remember Me </p>
            </div>
            <p className="m-0 text-[#D9176C]">Forget password?</p>
          </div>
          <button className="border p-2 rounded bg-[#D9176C] text-white my-2">
            Log in
          </button>

          <p className="text-center my-3 ">
            Don’t have an account?{" "}
            <span className="text-[#D9176C]">Sign Up</span>
          </p>

          <p className="text-center text-[#00000080]">or</p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2 shadow p-2">
              <FaGoogle className="text-[#EB4335]" />
              <p className="m-0">Login with Google</p>
            </div>

            <div className="flex items-center justify-center gap-2 shadow p-2">
              <FaFacebook className="text-[#1877F2]" />
              <p className="m-0">Login with Facebook</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
