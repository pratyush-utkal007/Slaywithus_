import React, { useContext, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import BookingSummery from '../Components/BookingSummery'
import { toast } from 'react-toastify';
import { themeContext } from './Context/DarkMode';
import { useAuth } from './Context/auth';

const PersonalDetails = ({ onprevious, selectService, selectDate, selectDateTime, userBasicDetail, setSelectedComponent }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [auth] = useAuth()
    const [dateOfBirth, setDateOfBirth] = useState(auth.user ? auth.user.dateOfBirth : '');
    const [occupation, setOccupation] = useState(auth.user ? auth.user.occupation : '');
    const [garmentsColor, setGarmentsColor] = useState([]);
    const [bodyBuilt, setBodyBuilt] = useState(auth.user ? auth.user.bodyBuilt : '');
    const [complexion, setComplexion] = useState(auth.user ? auth.user.complexion : '');
    const [socialLink, setSocialLink] = useState(auth.user ? auth.user.socialLink : '');
    const [profileImage, setProfileImage] = useState('');
    const [favoriteCloset, setFavoriteCloset] = useState(auth.user ? auth.user.favoriteCloset : '');
    const [outfitPhotos, setOutfitPhotos] = useState('');
    const [message, setMessage] = useState('');

    const [showPersonalDetails, setShowPersonalDetails] = useState(true);
    const [showBookingSummery, setBookingSummery] = useState(false)

    const persionalData = {
        dateOfBirth,
        occupation,
        garmentsColor,
        bodyBuilt,
        complexion,
        socialLink,
        profileImage,
        favoriteCloset,
        outfitPhotos,
        message
    }

    const HandleNext = () => {
        if (!persionalData.dateOfBirth ||
            !persionalData.occupation ||
            !persionalData.garmentsColor ||
            !persionalData.bodyBuilt ||
            !persionalData.complexion ||
            !persionalData.socialLink ||
            !persionalData.favoriteCloset) {
            toast("All Fields are required", {
                position: toast.POSITION.TOP_RIGHT,
            })
        } else {
            setShowPersonalDetails(false);
            setBookingSummery(true);
            setSelectedComponent('Summary');
        }
    }

    const handlePrevious = () => {
        setShowPersonalDetails(true);
        setBookingSummery(false);
        setSelectedComponent('Personal Details');
    };

    const handleCheckbox = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setGarmentsColor([...garmentsColor, value]);
        } else {
            setGarmentsColor(garmentsColor.filter(color => color !== value));
        }
    }
    return (
        <>
            {
                showPersonalDetails && (
                    <>
                        <div className="w-full mx-2 md:mx-0 md:w-[70%] border-2 p-4 shadow-2xl rounded-lg mb-10">
                            <form>
                                <div className="basic-details p-4 lg:p-1 py-3">
                                    <h5 className="sub-heading text-xl font-semibold tracking-wide">Personal Details</h5>
                                    <div className="my-3">
                                        <label htmlFor="fname" className="text-sm font-bold">
                                            Date Of Birth : <span className="text-red-500">*</span>
                                        </label>
                                        <br />
                                        <input
                                            type="date"
                                            id="dob"
                                            max={new Date().toISOString().split('T')[0]}
                                            name="dateofbirth"
                                            className={`${darkMode ? "text-black" : " text-black"} input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                                            placeholder="Enter your firstname"
                                            value={dateOfBirth}
                                            onChange={(e) => setDateOfBirth(e.target.value)}
                                        />
                                    </div>
                                    <div className="my-3">
                                        <label className="pb-1 pt-3" htmlFor="occupation">
                                            Occupation : <span className="text-red-500">*</span>
                                        </label>
                                        <br />
                                        <select
                                            className={`${darkMode ? "text-black" : " text-black"} input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                                            name="occupation"
                                            id="occupation"
                                            value={occupation}
                                            onChange={(e) => setOccupation(e.target.value)}

                                        >
                                            <option value="">Select Occupation</option>
                                            <option value="student">Student</option>
                                            <option value="homemaker">Homemaker</option>
                                            <option value="workingprofessional">Working professional</option>
                                            <option value="seniorcitizen">Senior Citizen</option>
                                            <option value="child">Child</option>
                                        </select>
                                        <br />
                                    </div>
                                    <div className="my-3 ">
                                        <label className="pb-1 pt-3 mb-4">Favourite Colour for Garments :<span className="text-red-500">*</span></label>
                                        <div className="space-x-2 mb-2">
                                            <input
                                                type="checkbox"
                                                name="garmentscolor"
                                                id="red"
                                                value="red"
                                                onChange={handleCheckbox}
                                                checked={garmentsColor.includes('red')}
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
                                                checked={garmentsColor.includes('blue')}
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
                                                checked={garmentsColor.includes('green')}
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
                                                checked={garmentsColor.includes('yellow')}
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
                                                checked={garmentsColor.includes('orange')}
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
                                                checked={garmentsColor.includes('pink')}
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
                                                checked={garmentsColor.includes('purple')}
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
                                                checked={garmentsColor.includes('black')}
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
                                                checked={garmentsColor.includes('grey')}
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
                                                checked={garmentsColor.includes('white')}
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
                                                checked={garmentsColor.includes('magenta')}
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
                                                checked={garmentsColor.includes('charcoal')}
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
                                            className={`${darkMode ? "text-black" : " text-black"} input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
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
                                            className={`${darkMode ? "text-black" : " text-black"} input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
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
                                        <input type='url'
                                            name="sociallink"
                                            id="sociallink"
                                            className={`${darkMode ? "text-black" : " text-black"} input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
                                            placeholder="Paste here your profile link"
                                            value={socialLink}
                                            onChange={(e) => setSocialLink(e.target.value)} />
                                    </div>
                                    <div className="my-3">
                                        <label className="text-sm font-bold" htmlFor="profileImage">
                                            Upload a photo of yours to know you better :
                                            <span className="text-red-500">*</span>
                                        </label><br />
                                        <br />
                                        <label className={`${darkMode ? "text-black" : " text-black"} input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}>
                                            {profileImage ? profileImage.name : "Upload a photo"}
                                            <input type="file" name="profileImage" accept="image/*" onChange={(e) => { setProfileImage(e.target.files[0]) }} hidden />
                                        </label>
                                    </div>
                                    <div className="my-3">
                                        <label className="text-sm font-bold" htmlFor="favoritecloset">
                                            What are your 3 favourite items that you currently have in your closet:
                                            <span className='text-red-500'>*</span>
                                        </label>
                                        <br />
                                        <input
                                            className={`${darkMode ? "text-black" : " text-black"} input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
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
                                        <label className="text-sm font-bold" htmlFor="outfitPhotos">
                                            Please upload photo of the outfit for which you need advice (Upload two photos) :
                                            <span className="text-red-500">*</span>
                                        </label><br />
                                        <br />
                                        <label className={`${darkMode ? "text-black" : " text-black"} input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}>
                                            {outfitPhotos ? outfitPhotos.name : "Upload photo"}
                                            <input type="file" name="outfitPhotos" accept="image/*" multiple onChange={(e) => { setOutfitPhotos(e.target.files[0]) }} hidden />
                                        </label>
                                    </div>
                                    <div className="my-3">
                                        <label className="text-sm font-bold" htmlFor="message">
                                            Anything else you would want to let us know :
                                            <span className='text-red-500'>*</span>
                                        </label>
                                        <br />
                                        <textarea
                                            className={`${darkMode ? "text-black" : " text-black"} input-field w-full py-2 mt-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100`}
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
                                    <button onClick={() => onprevious()} type='button' className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'><AiOutlineArrowLeft className='text-lg' />previous</button>
                                    <button onClick={HandleNext} type='button' className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'>Next<AiOutlineArrowRight className='text-lg' /></button>
                                </div>
                            </form>
                        </div>
                    </>
                )
            }

            {
                showBookingSummery && (
                    <BookingSummery onprevious={handlePrevious} selectService={selectService} selectDate={selectDate} selectDateTime={selectDateTime} userBasicDetail={userBasicDetail} userPersionalData={persionalData} setSelectedComponent={setSelectedComponent} />
                )
            }
        </>

    )
}

export default PersonalDetails
