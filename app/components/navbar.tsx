import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import profile from "../assests/profile.png"


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const hamburgerLinks = [
        { to: "/portfolio", label: "پورتفولیو" },
        { to: "/dashboard/profile", label: "پروفایل" },
        { to:"blog", label:"بلاگ"},
        { to: "/messages", label: "پیام‌ها" },
        { to: "/dashboard/meetings", label: "جلسه‌ها" },
        { to: "/dashboard/stats", label: "آمار بازدید" },
        { to: "#", label: "حمایت از من" },
    ];

    return (
        <nav className="relative">

            {/* Mobile Menu */}

            <>
            {!isOpen && (
                <>
                <div className="flex justify-start md:hidden">
                    <button
                    onClick={() => setIsOpen(true)}
                    className="flex flex-col items-start gap-1.5 p-2"
                    aria-label="hamburgerMenu"
                    >
                    <span className="block w-7 h-0.5 bg-gray-700 rounded-full" />
                    <span className="block w-5 h-0.5 bg-gray-700 rounded-full" />
                    <span className="block w-7 h-0.5 bg-gray-700 rounded-full" />
                    </button>
                </div>
                </>
                
            )}

            {isOpen && (
                <>
                <div
                className="fixed inset-0 z-30 bg-black/50"
                onClick={() => setIsOpen(false)}
                />
                <section
                className="fixed top-0 flex flex-col items-center
                right-0 z-40 p-5 md:hidden bg-gray-100 h-screen w-60 
                rounded-l-xl"
                >

                <div className="imageBox relative">
                    <img src={profile} className="w-30 h-30 mb-6 rounded-full border-2 border-orange-500" />
                    <button className="absolute bottom-7 left-1 w-7 h-7 rounded-full
                                       text-white flex items-center justify-center shadow-sm bg-primary"  id="editProfile"
                                       onClick={()=>navigate("#")}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </div>
                
                <div className="w-full h-0.5 bg-orange-500 rounded-full opacity-50" />
                {hamburgerLinks.map((link) => (
                            <NavLink 
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className="mt-4 hover:text-orange-500"
                            >
                                {link.label}
                            </NavLink>
                    )
                )
            }
            </section>
                </>
            )}
            </>
            {/* Desktop */}

        </nav>
    );
}

export default Navbar;