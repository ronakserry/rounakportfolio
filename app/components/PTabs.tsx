import { useState } from "react";

const tabs = [
    { id: "develop", label:"توسعه نرم افزار"},
    { id: "content", label:"تولید محتوا"},
    { id: "uiux", label:"طراحی uiux"},
] as const;

type TabId = (typeof tabs)[number]["id"]

const tabClass = (isActive: boolean) =>
    `relative cursor-pointer after:absolute after:left-0 after:right-0
    after:top-full after:h-0.5 after:rounded-md ${
        isActive
            ? "text-orange-500 after:bg-orange-500"
            : "hover:text-orange-500"
        }`;

function PTabs(){
    const [active, setActive] = useState<TabId>("develop");

    return (
        <>
        <section className="pList w-full md:hidden">
            <div className="mx-auto w-fit">
                <nav 
                    className="mr-3 flex w-105 justify-center gap-6"
                    aria-label="tabs">
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

                    {active === "develop" && (
                        <></>
                    )}

                    {active === "content" && (
                        <></>
                    )}

                    {active === "uiux" && (
                        <></>
                    )}
            </div>
        </section>
        </>
    )
}
export default PTabs;