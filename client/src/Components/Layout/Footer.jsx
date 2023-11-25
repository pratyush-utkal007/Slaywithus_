import React from "react";
import logo from "../../Images/SlaywithUs-logo.png";
import { Link, NavLink } from "react-router-dom";
import instagram from "../../Images/instagram.png";
import { useAuth } from "../Context/auth";
import { toast } from "react-toastify";

const Footer = () => {
  const [auth, setAuth] = useAuth();

  // Logout function
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("loginToken");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <footer className="footer pt-10 md:pt-20 md:mt-9 px-5">
        <div className="mx-auto flex flex-wrap justify-center font-[jost] text-white">
          <div className="lg:w-1/4 w-full lg:mb-0 mb-4">
            <a href="/">
              <img src={logo} alt={logo} className="w-48" />
            </a>
            <p className="text-lg md:text-xl font-[Cormorant Garamond] mt-2">
              A convenient flexible, time-saving service, tailored to your style
              requirements.
            </p>
          </div>
          <div className="lg:w-1/4 w-full lg:text-left">
            <h2 className="text-2xl font-semibold mb-4">QUICK LINKS</h2>
            <ul className="text-lg md:text-xl list-none">
              <li className="mb-2">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="mb-2">
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li className="mb-2">
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li className="mb-2">
                <Link to={"/contact-us"}>Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 w-full lg:text-left ">
            <h2 className="text-2xl font-semibold mb-4">MY ACCOUNT</h2>
            <ul className="text-lg md:text-xl list-none">
              <li className="mb-2">
                <Link to={"/booking"}>Book an Appointment</Link>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item pb-4">
                    <Link to={"/register"}>Register</Link>
                  </li>
                  <li className="nav-item pb-4">
                    <Link to={"/login"}>Login</Link>
                  </li>
                </>
              ) : null}
              <li className="mb-2">
                <Link to={"/reset-password"}>Reset Password</Link>
              </li>
              {auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink onClick={handleLogout} to={"/login"}>
                      Log out
                    </NavLink>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
          <div className="lg:w-1/4 w-full lg:text-left mt-5 md:text-center">
            <p className="text-xl md:text-2xl ">
              <i className="bi bi-envelope md:mx-2"></i>Email:{" "}
              <a href="mailto:info.slaywithus@gmail.com" className="text-white">
                info.slaywithus@gmail.com
              </a>
            </p>
            <p className="footer-qoute text-lg font-[Cormorant Garamond] mt-2">
              "Your Style, Perfected: Experience the Art of Custom Styling with
              Our Consultancy. From Tailored Outfits to Flawless Accessories, We
              Craft a Look That's Uniquely You."
            </p>
            <div className=" flex mt-4">
              <a href="https://www.instagram.com/_slay_with_us__/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
                <img src={instagram} alt="" className="w-8" />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-600 mt-6" />
        <p className="text-center text-sm text-white py-3">
          Copyright © 2023 All Rights Reserved. Developed By DIGITAL DETA
        </p>
      </footer>
    </>
  );
};

export default Footer;
