import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import BookingServices from "../Components/BookingServices";
import DateTime from "../Components/DateTime";
import { toast } from "react-toastify";

const Booking = () => {
  const [selectService, setSelectService] = useState({});
  const [showServices, setShowServices] = useState(true);
  const [showDateTime, setShowDateTime] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Services");

  const handleSelectService = (service) => {
    setSelectService(service);
  };

  const handleNext = () => {
    if (!selectService) {
      toast("Select a service", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setShowServices(false);
      setShowDateTime(true);
      setSelectedComponent("Date & Time");
    }
  };

  const handlePrevious = () => {
    setShowServices(true);
    setShowDateTime(false);
    setSelectedComponent("Services");
  };

  return (
    <Layout>
      <div className="flex justify-center md:gap-5 lg:mx-52 lg:gap-12">
        <div className="">
          <ul className="border-2 shadow-2xl rounded-lg hidden md:block">
            <li
              className={`flex items-center px-10 py-7 text-lg ${
                selectedComponent === "Services"
                  ? "text-green-600 font-bold"
                  : ""
              }`}
            >
              Services
            </li>
            <li
              className={`flex items-center px-10 pb-7 text-lg ${
                selectedComponent === "Date & Time"
                  ? "text-green-600 font-bold"
                  : ""
              }`}
            >
              Date & Time
            </li>
            <li
              className={`flex items-center px-10 pb-7 text-lg ${
                selectedComponent === "Basic Details"
                  ? "text-green-600 font-bold"
                  : ""
              }`}
            >
              Basic Details
            </li>
            <li
              className={`flex items-center px-10 pb-7 text-lg ${
                selectedComponent === "Personal Details"
                  ? "text-green-600 font-bold"
                  : ""
              }`}
            >
              Personal Details
            </li>
            <li
              className={`flex items-center px-10 pb-7 text-lg ${
                selectedComponent === "Summary"
                  ? "text-green-600 font-bold"
                  : ""
              }`}
            >
              Summary
            </li>
            <li
              className={`flex items-center px-10 pb-7 text-lg ${
                selectedComponent === "Payment"
                  ? "text-green-600 font-bold"
                  : ""
              }`}
            >
              Payment
            </li>
          </ul>
        </div>

        {showServices && (
          <BookingServices
            selectService={selectService}
            onSelect={handleSelectService}
            onNext={handleNext}
          />
        )}

        {showDateTime && (
          <DateTime
            selectService={selectService}
            onPrevious={handlePrevious}
            setSelectedComponent={setSelectedComponent}
          />
        )}
      </div>
    </Layout>
  );
};

export default Booking;
