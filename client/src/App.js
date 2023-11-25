import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Booking from "./Pages/Booking";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Pages/Blog";
import Aboutus from "./Pages/Aboutus";
import ContacLayout from "./Pages/Contactus";
import { AuthProvider } from "./Components/Context/auth";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "./Components/Context/DarkMode";
import PrivacyPlolicy from "./Pages/PrivacyPlolicy";
import ItWorks from "./ItWorks";
import Included from "./Pages/Included";
import Popup from "./Components/Popup";
import ResetPassword from "./Pages/ResetPassword";
import SingleBlog from "./Components/SingleBlog";

function App() {
  const [popup, setPopup] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 4000);
  }, []);
  return (
    <>
      <div
        className="App"
        style={{
          background: darkMode ? "#1a1918" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <AuthProvider>
          <BrowserRouter>
            <ToastContainer
              position="bottom-center"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {popup && <Popup setPopup={setPopup} popup={popup} />}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<SingleBlog />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/contact-us" element={<ContacLayout />} />
              <Route path="/privacy-policy" element={<PrivacyPlolicy />} />
              <Route path="/how-it-work" element={<ItWorks />} />
              <Route path="/what-is-included" element={<Included />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
