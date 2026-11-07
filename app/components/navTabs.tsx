import { useState } from "react";

import Social from "./social";
import Works from "./works";
import Skills from "./skills";
import Contact from "./contact";
import PTabs from "../components/pTabs"

const tabs = [
    { id: "about", label: "در مورد من" },
    { id: "portfolio", label: "پورتفولیو" },
    { id: "contact", label: "همکاری با من" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const tabClass = (isActive: boolean) =>
    `relative cursor-pointer after:absolute after:left-0 after:right-0
    after:top-full after:h-0.5 after:rounded-md ${
        isActive
            ? "text-orange-500 after:bg-orange-500"
            : "hover:text-orange-500"
    }`;

function NavTabs() {
    const [active, setActive] = useState<TabId>("about");

    return (
        <section className="mainList mt-2 w-full md:hidden">
            <div className="mx-auto w-fit">
                <nav
                    className="mr-3 flex w-105 justify-center gap-6"
                    aria-label="tabs"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            id={tab.id}
                            onClick={() => setActive(tab.id)}
                            aria-pressed={active === tab.id}
                            className={`${tabClass(active === tab.id)} ${
                                active === tab.id
                                    ? "font-medium"
                                    : "font-normal"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>

                <hr className="mr-3 w-110 border-gray-300" />

                {active === "about" && (
                    <>
                        <p className="mr-3 mt-4 w-105 max-w-xl text-right font-normal leading-8">
                            سلام ^^ من روناکم، طراح رابط و تجربه
                            کاربری و برنامه‌نویس وبم و با فریم‌ورک‌های
                            ویو و ری‌اکت کار می‌کنم. هدف اصلی من از کار
                            تو این زمینه اینه که به مردم کمک کنم داستان
                            خودشون رو از این طریق بگن.
                        </p>

                        <p className="mr-3 mt-4 w-105 max-w-xl text-right font-normal leading-8">
                            با من از طریق لینک‌های زیر یا همکاری با من
                            تماس بگیرین. اگه همدیگه رو حضوری نمی‌شناسیم،
                            ترجیحم همین‌جا یا ایمیل هست. دمتون گرم.
                        </p>

                        <Social />

                        <section className="works mt-4 w-full">
                            <Works />
                        </section>
                    </>
                )}

                {active === "portfolio" && (
                    <div className="title mr-3 mt-4 w-105 text-right font-medium">
                        <div className="flex items-center justify-between">
                            <span>من چی بلدم؟</span>
                        </div>

                        <Skills />
                        <PTabs />
                    </div>
                )}

                {active === "contact" && (
                    <div className="mr-3 mt-4 w-105 text-right">
                        <Contact />
                    </div>
                )}
            </div>
        </section>
    );
}
export default NavTabs;