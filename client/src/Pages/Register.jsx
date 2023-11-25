import React, { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import axios from "axios";
import isValidEmail from "validator/lib/isEmail";
import { themeContext } from "../Components/Context/DarkMode";
import { Country, State } from "country-state-city";
import Select from "react-select";

const Register = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);

  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cpasswordVisible, setCPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [occupation, setOccupation] = useState("");
  const [garmentsColor, setGarmentsColor] = useState([]);
  const [bodyBuilt, setBodyBuilt] = useState("");
  const [complexion, setComplexion] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [favoriteCloset, setFavoriteCloset] = useState("");
  const [outfitPhotos, setOutfitPhotos] = useState("");
  const [message, setMessage] = useState("");

  const [showBasicDetails, setShowBasicDetails] = useState(true);
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);

  useEffect(() => {
    const countries = Country.getAllCountries();
    setCountryData(
      countries.map((country) => ({
        value: country.isoCode,
        label: country.name,
      }))
    );
  }, []);

  useEffect(() => {
    if (country) {
      const states = State.getStatesOfCountry(country.value);
      setStateData(
        states.map((state) => ({ value: state.isoCode, label: state.name }))
      );
      setState(null);
    } else {
      setStateData([]);
    }
  }, [country]);

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
  });

  const navigate = useNavigate();

  const allData = {
    firstName,
    lastName,
    email,
    phone,
    country,
    state,
    password,
    cpassword,
    dateOfBirth,
    occupation,
    garmentsColor,
    bodyBuilt,
    complexion,
    socialLink,
    profileImage,
    favoriteCloset,
    outfitPhotos,
    message,
  };

  // validate form
  //first anme
  const handleFirstNameChange = (e) => {
    const inputValue = e.target.value;
    const pattern = /^[A-Za-z]+$/;

    if (pattern.test(inputValue) || inputValue === "") {
      setFirstName(inputValue);
    }
  };
  //last name
  const handleLastNameChange = (e) => {
    const inputValue = e.target.value;
    const pattern = /^[A-Za-z]+$/;

    if (pattern.test(inputValue) || inputValue === "") {
      setLastName(inputValue);
    }
  };
  //Phone number
  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    const pattern = /^[0-9]+$/;

    if (pattern.test(inputValue) || inputValue === "") {
      if (inputValue.length <= 10) {
        setPhone(inputValue);
      }
    }
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    const pattern = /^[A-Za-z0-9@#$%^&*!]+$/;

    if (pattern.test(inputValue) || inputValue === "") {
      setPassword(inputValue);
    }
  };
  const validatePassword = () => {
    let strength;
    const minLength = 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    if (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecial
    ) {
      strength = "Strong";
    }
    setPasswordStrength(strength);
  };

  // submit form
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/register", {
        firstName,
        lastName,
        email,
        phone,
        country,
        state,
        password,
        cpassword,
        dateOfBirth,
        occupation,
        garmentsColor,
        bodyBuilt,
        complexion,
        socialLink,
        profileImage,
        favoriteCloset,
        outfitPhotos,
        message,
      });
      if (res.data && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else if (
        res.data &&
        !res.data.success &&
        res.data.message === "Email already exists"
      ) {
        // Show alert message here
        toast.error("Email already exists.");
      }
    } catch (error) {
      toast.error("Somethitng Went Worng !!");
    }
  };

  const handleCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setGarmentsColor([...garmentsColor, value]);
    } else {
      setGarmentsColor(garmentsColor.filter((color) => color !== value));
    }
  };

  const handleNext = () => {
    if (
      !allData.firstName ||
      !allData.lastName ||
      !allData.email ||
      !allData.phone ||
      !allData.country ||
      !allData.state ||
      !password ||
      !cpassword
    ) {
      toast("All Fields are required", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (password.length < 6) {
      toast.error("Password must be 6 digit !!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (password !== cpassword) {
      toast.error("Password not matched !!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (!isValidEmail(allData.email)) {
      toast.error("Invalid email address!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      setShowBasicDetails(false);
      setShowPersonalDetails(true);
    }
  };
  const handlePrevious = () => {
    setShowBasicDetails(true);
    setShowPersonalDetails(false);
  };

  return (
    <Layout>
      <h2 className="text-center">
        <Link to={"/"}>Slaywithus</Link>
        <span>&gt;&nbsp;Register</span>
      </h2>
      <h1 className="text-center text-4xl py-3">Register</h1>
      <form onSubmit={handelSubmit}>
        <div className="flex justify-center">
          {showBasicDetails && (
            <>
              <div className="flex flex-col px-2 md:px-4 lg:px-10 w-full md:mx-0 md:w-[50%] border-2 shadow-2xl rounded-lg mb-10">
                <div>
                  <div className="flex details-tab border h-[3rem] rounded-full gap-5">
                    <span
                      className={`${
                        darkMode
                          ? "text-black bg-white"
                          : " text-white bg-black"
                      } px-4 h-full w-36 flex items-center justify-center font-semibold text-lg rounded-full`}
                    >
                      Basic Details
                    </span>
                    <span
                      className={`${
                        darkMode ? "text-white" : " text-black"
                      } text-black h-full flex items-center justify-center font-semibold text-lg`}
                    >
                      Personal Details
                    </span>
                  </div>
                  <div className="my-3">
                    <label htmlFor="fname" className="text-sm font-bold">
                      Firstname <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="firstName"
                      id="fname"
                      className={`${
                        darkMode ? "text-black" : " text-black"
                      } w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                      placeholder="Enter your firstname"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="lname" className="text-sm font-bold">
                      Lastname <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="lastName"
                      id="lname"
                      className={`${
                        darkMode ? "text-black" : " text-black"
                      } w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                      placeholder="Enter your lastname"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="email" className="text-sm font-bold ">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`${
                        darkMode ? "text-black" : " text-black"
                      } w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="phoneInput" className="text-sm font-bold ">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <input
                      className={`${
                        darkMode ? "text-black" : " text-black"
                      } w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                      id="phoneInput"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                  <div className="my-3">
                    <label
                      className="pb-1 pt-3  text-sm font-bold"
                      htmlFor="country"
                    >
                      Country: <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <Select
                      className={`${
                        darkMode ? "text-black" : " text-black"
                      } w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                      id="country"
                      name="country"
                      placeholder="Enter your country"
                      options={countryData}
                      value={country}
                      onChange={setCountry}
                      isClearable
                    />
                    <br />
                  </div>
                  <div className="my-3">
                    <label
                      className="pb-1 pt-3 text-sm font-bold"
                      htmlFor="state"
                    >
                      State: <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <Select
                      className={`${
                        darkMode ? "text-black" : " text-black"
                      } w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                      id="state"
                      name="state"
                      options={stateData}
                      value={state}
                      onChange={setState}
                      isClearable
                      isDisabled={!country}
                    />
                    <br />
                  </div>
                  <div>
                    <label className="pb-1 pt-3" htmlFor="password">
                      Password:{" "}
                      <span className="text-red-500 px-1 fs-4">*</span>
                    </label>
                    <br />
                    <div className="password-box relative ">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        onInput={validatePassword}
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
                    <div className="py-2 m-0 ">
                      {password.length === 0
                        ? ""
                        : !passwordStrength
                        ? "Weak"
                        : passwordStrength}
                    </div>
                    <label className="pb-1 pt-1" htmlFor="cpassword">
                      Confirm Password:{" "}
                      <span className="text-red-500 px-1 fs-4">*</span>
                    </label>
                    <br />
                    <div className="password-box relative">
                      <input
                        type={cpasswordVisible ? "text" : "password"}
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } states py-2 px-3 mt-1 rounded-md border border-gray-300 focus:ring focus:ring-green-400 w-full bg-gray-100 cpassword ${
                          cpasswordVisible ? "text" : "password"
                        }`}
                        name="cpassword"
                        id="cpassword"
                        placeholder="Confirm password"
                        value={cpassword}
                        onChange={(e) => setCPassword(e.target.value)}
                      />
                      <div
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } showHidePass text-xl text-end p-0 absolute right-3 top-4 cursor-pointer`}
                        onClick={() => setCPasswordVisible(!cpasswordVisible)}
                      >
                        {cpasswordVisible ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end px-2 my-3 ">
                  <button
                    onClick={handleNext}
                    type="button"
                    className="flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg"
                  >
                    Next
                    <AiOutlineArrowRight className="text-lg" />
                  </button>
                </div>
              </div>
            </>
          )}
          {showPersonalDetails && (
            <>
              <div className="flex flex-col px-2 md:px-4 lg:px-10 w-full md:mx-0 md:w-[50%] border-2 shadow-2xl rounded-lg mb-10">
                <div>
                  <div className="flex justify-between md:justify-normal details-tab border h-[3rem] rounded-full gap-3 md:gap-5">
                    <span
                      className={`${
                        darkMode ? "text-white" : " text-black"
                      } text-black h-full flex items-center justify-center font-semibold text-lg ps-2 md:ps-5`}
                    >
                      Basic Details
                    </span>
                    <span
                      className={`${
                        darkMode
                          ? "text-black bg-white"
                          : " text-white bg-black"
                      } px-4 h-full w-44 flex items-center justify-center font-semibold text-lg rounded-full`}
                    >
                      Personal Details
                    </span>
                  </div>
                  <div className="basic-details p-4 lg:p-1 py-3">
                    <h5 className="sub-heading text-xl font-semibold tracking-wide">
                      Personal Details
                    </h5>
                    <div className="my-3">
                      <label htmlFor="fname" className="text-sm font-bold ">
                        Date Of Birth <span className="text-red-500">*</span>
                      </label>
                      <br />
                      <input
                        type="date"
                        id="dob"
                        max={new Date().toISOString().split("T")[0]}
                        name="dateofbirth"
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                        placeholder="Enter your firstname"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                      />
                    </div>
                    <div className="my-3">
                      <label className="pb-1 pt-3" htmlFor="occupation">
                        Occupation :<span className="text-red-500">*</span>
                      </label>
                      <br />
                      <select
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                        name="occupation"
                        id="occupation"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                      >
                        <option value="">Select Occupation</option>
                        <option value="student">Student</option>
                        <option value="homemaker">Homemaker</option>
                        <option value="workingprofessional">
                          Working professional
                        </option>
                        <option value="seniorcitizen">Senior Citizen</option>
                        <option value="child">Child</option>
                      </select>
                      <br />
                    </div>
                    <div className="my-3 ">
                      <label className="pb-1 pt-3 mb-4">
                        Favourite Colour for Garments :
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="red"
                          value="red"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("red")}
                        />
                        <label htmlFor="red">Red</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="blue"
                          value="blue"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("blue")}
                        />
                        <label htmlFor="blue">Blue</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="green"
                          value="green"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("green")}
                        />
                        <label htmlFor="green">Green</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="yellow"
                          value="yellow"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("yellow")}
                        />
                        <label htmlFor="yellow">Yellow</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="orange"
                          value="orange"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("orange")}
                        />
                        <label htmlFor="orange">Orange</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="pink"
                          value="pink"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("pink")}
                        />
                        <label htmlFor="pink">Pink</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="purple"
                          value="purple"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("purple")}
                        />
                        <label htmlFor="purple">Purple</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="black"
                          value="black"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("black")}
                        />
                        <label htmlFor="black">Black</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="grey"
                          value="grey"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("grey")}
                        />
                        <label htmlFor="grey">Grey</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="white"
                          value="white"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("white")}
                        />
                        <label htmlFor="white">White</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="magenta"
                          value="magenta"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("magenta")}
                        />
                        <label htmlFor="magenta">Magenta</label>
                      </div>
                      <div className="space-x-2 mb-2">
                        <input
                          type="checkbox"
                          name="garmentscolor"
                          id="charcoal"
                          value="charcoal"
                          onChange={handleCheckbox}
                          checked={garmentsColor.includes("charcoal")}
                        />
                        <label htmlFor="charcoal">Charcoal</label>
                      </div>
                      <br />
                    </div>
                    <div className="my-3">
                      <label className="pb-1" htmlFor="occupation">
                        Body Built :<span className="text-red-500">*</span>
                      </label>
                      <br />
                      <select
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                        name="occupation"
                        id="occupation"
                        value={bodyBuilt}
                        onChange={(e) => setBodyBuilt(e.target.value)}
                      >
                        <option value="">Select Body Built</option>
                        <option value="petite">Petite</option>
                        <option value="standard">Standard</option>
                        <option value="plussize">Plus Size</option>
                      </select>
                      <br />
                    </div>
                    <div className="my-3">
                      <label className="pb-1" htmlFor="complexion">
                        Complexion :<span className="text-red-500">*</span>
                      </label>
                      <br />
                      <select
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                        name="complexion"
                        id="complexion"
                        value={complexion}
                        onChange={(e) => setComplexion(e.target.value)}
                      >
                        <option value="">Select Complexion</option>
                        <option value="wheatish">Wheatish</option>
                        <option value="fair">Fair</option>
                        <option value="brown">Brown</option>
                      </select>
                      <br />
                    </div>
                    <div className="my-3">
                      <label className="text-sm font-bold" htmlFor="sociallink">
                        Please provide a link to your social media profile:
                        <span className="text-red-500">*</span>
                      </label>
                      <br />
                      <input
                        type="url"
                        name="sociallink"
                        id="sociallink"
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                        placeholder="Paste here your profile link"
                        value={socialLink}
                        onChange={(e) => setSocialLink(e.target.value)}
                      />
                    </div>
                    <div className="my-3">
                      <label
                        className="text-sm font-bold"
                        htmlFor="profileImage"
                      >
                        Upload a photo of yours to know you better :
                        <span className="text-red-500">*</span>
                      </label>
                      <br />
                      <br />
                      <label
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                      >
                        {profileImage ? profileImage.name : "Upload a photo"}
                        <input
                          type="file"
                          name="profileImage"
                          accept="image/*"
                          onChange={(e) => {
                            setProfileImage(e.target.files[0]);
                          }}
                          hidden
                        />
                      </label>
                    </div>
                    <div className="my-3">
                      <label
                        className="text-sm font-bold"
                        htmlFor="favoritecloset"
                      >
                        What are your 3 favourite items that you currently have
                        in your closet:
                        <span>*</span>
                      </label>
                      <br />
                      <input
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                        type="text"
                        name="favoritecloset"
                        placeholder="Write here..."
                        value={favoriteCloset}
                        onChange={(e) => setFavoriteCloset(e.target.value)}
                        id="favoritecloset"
                      />
                      <br />
                    </div>
                    <div className="my-3">
                      <label
                        className="text-sm font-bold"
                        htmlFor="outfitPhotos"
                      >
                        Please upload photo of the outfit for which you need
                        advice (Upload two photos) :
                        <span className="text-red-500">*</span>
                      </label>
                      <br />
                      <br />
                      <label
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                      >
                        {outfitPhotos ? outfitPhotos.name : "Upload photo"}
                        <input
                          type="file"
                          name="outfitPhotos"
                          accept="image/*"
                          multiple
                          onChange={(e) => {
                            setOutfitPhotos(e.target.files[0]);
                          }}
                          hidden
                        />
                      </label>
                    </div>
                    <div className="my-3">
                      <label className="text-sm font-bold" htmlFor="message">
                        Anything else you would want to let us know :
                        <span>*</span>
                      </label>
                      <br />
                      <textarea
                        className={`${
                          darkMode ? "text-black" : " text-black"
                        } input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                        type="text"
                        name="message"
                        placeholder="Write here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        id="message"
                      />
                      <br />
                    </div>
                  </div>
                  <div className="flex justify-between px-4 mb-3">
                    <button
                      onClick={handlePrevious}
                      type="button"
                      className="flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg"
                    >
                      <AiOutlineArrowLeft className="text-lg" />
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg"
                    >
                      Submit
                      <AiOutlineArrowRight className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </form>
    </Layout>
  );
};

export default Register;
