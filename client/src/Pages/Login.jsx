import React, { useContext, useState } from "react";
import Layout from "../Components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Components/Context/auth";
import { toast } from "react-toastify";
import { themeContext } from "../Components/Context/DarkMode";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useAuth();
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
  });

  const navigate = useNavigate();

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("loginToken", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <h2 className="text-center">
        <Link to={"/"}>Slaywithus</Link>
        <span>&gt;&nbsp;Login</span>
      </h2>
      <h1 className="text-center text-4xl py-3">Login</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-1 md:mx-40 text-center md:text-left items-center justify-center">
        <div className=" login-left-wrapper">
          <div className="col-11 sm:col-11 md:col-6 lg:col-5 my-lg-5 px-lg-4 py-lg-4">
            <div className="left-wrapper">
              <h1 className="pb-4 ">Welcome Back!</h1>
              <p className="px-3 md:p-0 ">
                Sign in to your account using the form available here. Please
                feel free to reach us anytime if you have any issues signing
                into your account.
              </p>
            </div>
          </div>
        </div>
        <div className=" login-form">
          <form
            onSubmit={handleSubmit}
            className="justify-center text-center my-5"
          >
            <div className="right-wrapper my-4 px-6">
              <div>
                <div
                  className={`${
                    darkMode ? "text-black" : " text-black"
                  }  input-field w-full h-full mb-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div
                  className={`${
                    darkMode ? "text-black" : " text-black"
                  } input-field w-full h-full mb-3 rounded-md border border-gray-300 relative focus:ring focus:ring-green-400 bg-gray-100`}
                >
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className={`${
                      darkMode ? "text-black" : " text-black"
                    } showHidePass text-xl text-end p-0 absolute right-3 top-4 cursor-pointer`}
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </div>
                </div>
                <p className="text-left ms-6 md:ms-0 md:pl-4">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="checkbox"
                    id="singed"
                  />
                  <label htmlFor="singed">Keep me signed in</label>
                </p>
                <input
                  className="login-btn w-1/2 border-0 cursor-pointer my-4 bg-yellow-500 text-white py-2 rounded-lg"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="forgot my-3">
                Forgot your password?
                <Link
                  to={"/reset-password"}
                  className="ps-2 text-dark text-decoration-none"
                >
                  Click here
                </Link>
              </div>
              <div className="create px-4 md:px-0">
                Create a new account?{" "}
                <Link className="text-decoration-none pe-1" to="/register">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
