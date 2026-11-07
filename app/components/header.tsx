import headerPic from "../assests/header.png"
import profile from "../assests/profile.png"
import Navbar from "./navbar"
import ShareBtn from "./ShareBtn"

import { useNavigate } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faLocationDot } from "@fortawesome/free-solid-svg-icons";

/*mobile for now*/
function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex md:hidden flex-col items-center relative mb-4">
      <img
        src={headerPic}
        alt="header banner"
        className="w-full h-30 border-b-3 object-cover"
      />

      <div className="absolute top-0 right-0 z-50">
        <Navbar />
      </div>

      <img
        src={profile}
        alt="profile"
        className="self-center absolute translate-y-1/2 w-25 h-25 rounded-full 
        border-3 border-orange-500 shadow-md z-20"
      />

      <button
        className="absolute top-31 left-1/2 -translate-x-[50px] w-7 h-7 rounded-full
        text-white flex items-center justify-center shadow-sm bg-primary z-30 border-orange-500 border-1"  id="editProfile"
      >
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => navigate("#")}
        />
      </button>

      <section className="basicInfo mt-10 flex items-center md:hidden">
          <div className="infoBox flex items-center">
            <h1 className="name font-bold" id="name">روناک سِرّی</h1>
            <div className="h-6 border-l-2 border-orange-500 mx-3"></div>
            <h6 className="jobTitle font-medium" id="jobTitle">وب دولوپر</h6>
          </div>
          <button className="h-10 w-35 m-4 shadow-sm bg-primary text-white rounded-md" id="editInfo">ویرایش اطلاعات</button>
          <ShareBtn />
        </section>
    </header>
  ); 
}  

export default Header;