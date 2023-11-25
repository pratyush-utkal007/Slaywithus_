import React, { useContext, useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import PersonalDetails from '../Components/PersonalDetails'
import { toast } from "react-toastify";
import { useAuth } from "./Context/auth";
import { Country, State } from "country-state-city";
import Select from "react-select";
import { themeContext } from "./Context/DarkMode";

function BasicDetails({ selectService, selectDateTime, selectDate, onprevious, setSelectedComponent }) {
    const [auth] = useAuth()
    const [firstName, setFirstName] = useState(auth.user ? auth.user.firstName : '');
    const [lastName, setLastName] = useState(auth.user ? auth.user.lastName : '');
    const [email, setEmail] = useState(auth.user ? auth.user.email : '');
    const [phone, setPhone] = useState(auth.user ? auth.user.phone : '');
    const [note, setNote] = useState(auth.user ? auth.user.note : '');
    const [showBasicDetails, setShowBasicDetails] = useState(true);
    const [showPersonalDetails, setShowPersonalDetails] = useState(false);
    const [countryData, setCountryData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [country, setCountry] = useState(auth.user ? auth.user.country : null);
    const [state, setState] = useState(auth.user ? auth.user.state : null);

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const allData = {
        firstName,
        lastName,
        email,
        phone,
        country,
        state,
        note,
    }

    const HandleNext = () => {
        if (!allData.firstName || !allData.lastName || !allData.email || !allData.phone) {
            toast("All Fields are required", {
                position: toast.POSITION.TOP_RIGHT,
            })
        } else {
            setShowBasicDetails(false);
            setShowPersonalDetails(true);
            setSelectedComponent('Personal Details');
        }
    }

    const handlePrevious = () => {
        setShowBasicDetails(true);
        setShowPersonalDetails(false);
        setSelectedComponent('Basic Details');
    };

    // validate form
    //first anme
    const handleFirstNameChange = (e) => {
        const inputValue = e.target.value;
        const pattern = /^[A-Za-z]+$/;

        if (pattern.test(inputValue) || inputValue === '') {
            setFirstName(inputValue);
        }
    }
    //last name
    const handleLastNameChange = (e) => {
        const inputValue = e.target.value;
        const pattern = /^[A-Za-z]+$/;

        if (pattern.test(inputValue) || inputValue === '') {
            setLastName(inputValue)
        }
    }
    //Phone number
    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;
        const pattern = /^[0-9]+$/;

        if (pattern.test(inputValue) || inputValue === '') {
            if (inputValue.length <= 10) {
                setPhone(inputValue);
            }
        }
    }

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

    return (
        <>
            {
                showBasicDetails && (
                    <>
                        <div className="w-full mx-2 md:mx-0 md:w-[70%] border-2 shadow-2xl rounded-lg mb-10">
                            <div className="basic-details p-4 lg:p-1 lg:px-8 lg:py-3 py-3">
                                <form >
                                    <h5 className="sub-heading text-xl font-semibold tracking-wide">Basic Details</h5>
                                    <div className="my-3">
                                        <label htmlFor="fname" className="text-sm font-bold">
                                            Firstname <span className="text-red-500">*</span>
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="fname"
                                            className="w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100"
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
                                            className="w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100"
                                            placeholder="Enter your lastname"
                                            value={lastName}
                                            onChange={handleLastNameChange}
                                        />
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="email" className="text-sm font-bold">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="w-full py-2 px-3 mt-1 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100"
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
                                            className="w-full py-2 px-3 mt-1 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100"
                                            id="phoneInput"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            value={phone}
                                            onChange={handlePhoneChange}
                                        />
                                    </div>
                                    <div className="my-3">
                                        <label className="pb-1 pt-3  text-sm font-bold" htmlFor="country">
                                            Country: <span className="text-red-500">*</span>
                                        </label>
                                        <br />
                                        <Select

                                            className={`${darkMode ? "text-black" : " text-black"
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
                                        <label className="pb-1 pt-3 text-sm font-bold" htmlFor="state">
                                            State: <span className="text-red-500">*</span>
                                        </label>
                                        <br />
                                        <Select
                                            className={`${darkMode ? "text-black" : " text-black"
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
                                    <div className="">
                                        <label htmlFor="note" className="text-sm font-bold">
                                            Note
                                        </label>
                                        <br />
                                        <textarea
                                            name="note"
                                            id="note"
                                            className="w-full py-2 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100"
                                            rows="3"
                                            placeholder="Enter note details"
                                            value={note}
                                            onChange={(e) => setNote(e.target.value)}
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-between px-4 mb-3">
                                <button onClick={() => onprevious()} type='button' className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'><AiOutlineArrowLeft className='text-lg' />previous</button>
                                <button onClick={HandleNext} type='button' className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'>Next<AiOutlineArrowRight className='text-lg' /></button>
                            </div>
                        </div>
                    </>
                )
            }

            {
                showPersonalDetails && (
                    <>
                        <PersonalDetails onprevious={handlePrevious} selectService={selectService} selectDate={selectDate} selectDateTime={selectDateTime} userBasicDetail={allData} setSelectedComponent={setSelectedComponent} />
                    </>
                )
            }
        </>

    );
}

export default BasicDetails;
