import { useState } from "react";
import type { FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns-jalali";
import {
    faXmark,
    faCalendarAlt,
    faChevronLeft,
    faChevronRight,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { DayPicker } from "@daypicker/persian";
import "@daypicker/react/style.css";

export type Job = {
    jobtitle: string;
    company: string;
    city: string;
    startDate: string;
    endDate: string;
};

type AddModalProps = {
    onClose: () => void;
    onSubmit: (data: Job) => void;
};

function AddWorkModal({ onClose, onSubmit }: AddModalProps) {
    const [jobtitle, setJobtitle] = useState("");
    const [company, setCompany] = useState("");
    const [city, setCity] = useState("");

    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();

    const [openCalendar, setOpenCalendar] = useState<
        "startDate" | "endDate" | null
    >(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!startDate) {
            setOpenCalendar("startDate");
            return;
        }

        if (endDate && endDate < startDate) {
            setOpenCalendar("endDate");
            return;
        }

        onSubmit({
            jobtitle: jobtitle.trim(),
            company: company.trim(),
            city: city.trim(),
            startDate: format(startDate, "yyyy-MM"),
            endDate: endDate ? format(endDate, "yyyy-MM") : "",
        });
    }

    const calendarComponents = {
        Chevron: ({
            orientation = "down",
        }: {
            orientation?: "up" | "down" | "left" | "right";
        }) => (
            <FontAwesomeIcon
                icon={
                    orientation === "down"
                        ? faChevronDown
                        : orientation === "left"
                          ? faChevronRight
                          : orientation === "right"
                            ? faChevronLeft
                            : faChevronDown
                }
            />
        ),
    };

    return (
        <section
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="add-job-title"
                className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-md border border-gray-200 bg-white p-6 pt-16 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="بستن"
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-gray-500"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <h2
                    id="add-job-title"
                    className="mb-6 text-2xl font-bold text-gray-800"
                >
                    سابقه کار
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="jobtitle"
                            className="text-sm font-medium text-gray-700"
                        >
                            عنوان شغلی
                        </label>

                        <input
                            type="text"
                            name="jobtitle"
                            id="jobtitle"
                            placeholder="عنوان شغلی"
                            value={jobtitle}
                            onChange={(e) => setJobtitle(e.target.value)}
                            required
                            className="h-11 w-full !rounded-md border !border-primary px-3 outline-none"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="company"
                            className="text-sm font-medium text-gray-700"
                        >
                            نام شرکت
                        </label>

                        <input
                            type="text"
                            name="company"
                            id="company"
                            placeholder="نام شرکت"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                            className="h-11 w-full !rounded-md border !border-primary px-3 outline-none"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="city"
                            className="text-sm font-medium text-gray-700"
                        >
                            شهر
                        </label>

                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="نام شهر"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            className="h-11 w-full !rounded-md border !border-primary px-3 outline-none"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="startDate"
                            className="text-sm font-medium text-gray-700"
                        >
                            تاریخ شروع
                        </label>

                        <div className="relative">
                            <button
                                id="startDate"
                                type="button"
                                onClick={() =>
                                    setOpenCalendar(
                                        openCalendar === "startDate"
                                            ? null
                                            : "startDate"
                                    )
                                }
                                className="flex h-11 w-full items-center justify-between rounded-md border border-primary px-3 text-right outline-none"
                            >
                                <span
                                    className={
                                        startDate
                                            ? "text-gray-800"
                                            : "text-gray-400"
                                    }
                                >
                                    {startDate
                                        ? format(startDate, "MM/yyyy")
                                        : "انتخاب تاریخ شروع"}
                                </span>

                                <FontAwesomeIcon
                                    icon={faCalendarAlt}
                                    className="text-gray-500"
                                />
                            </button>

                            {openCalendar === "startDate" && (
                                <div className="absolute right-0 top-full z-[60] mt-2 rounded-md border border-gray-200 bg-white p-3 shadow-xl">
                                    <DayPicker
                                        mode="single"
                                        selected={startDate}
                                        onSelect={(date) => {
                                            setStartDate(date);

                                            if (
                                                date &&
                                                endDate &&
                                                endDate < date
                                            ) {
                                                setEndDate(undefined);
                                            }

                                            setOpenCalendar(null);
                                        }}
                                        disabled={
                                            endDate
                                                ? { after: endDate }
                                                : undefined
                                        }
                                        captionLayout="dropdown"
                                        components={calendarComponents}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="endDate"
                            className="text-sm font-medium text-gray-700"
                        >
                            تاریخ پایان
                        </label>

                        <div className="relative">
                            <button
                                id="endDate"
                                type="button"
                                onClick={() =>
                                    setOpenCalendar(
                                        openCalendar === "endDate"
                                            ? null
                                            : "endDate"
                                    )
                                }
                                className="flex h-11 w-full items-center justify-between rounded-md border border-primary px-3 text-right outline-none"
                            >
                                <span
                                    className={
                                        endDate
                                            ? "text-gray-800"
                                            : "text-gray-400"
                                    }
                                >
                                    {endDate
                                        ? format(endDate, "MM/yyyy")
                                        : "انتخاب تاریخ پایان"}
                                </span>

                                <FontAwesomeIcon
                                    icon={faCalendarAlt}
                                    className="text-gray-500"
                                />
                            </button>

                            {openCalendar === "endDate" && (
                                <div className="absolute right-0 top-full z-[60] mt-2 rounded-md border border-gray-200 bg-white p-3 shadow-xl">
                                    <DayPicker
                                        mode="single"
                                        selected={endDate}
                                        onSelect={(date) => {
                                            setEndDate(date);
                                            setOpenCalendar(null);
                                        }}
                                        disabled={
                                            startDate
                                                ? { before: startDate }
                                                : undefined
                                        }
                                        captionLayout="dropdown"
                                        components={calendarComponents}
                                    />
                                </div>
                            )}
                        </div>

                        <p className="text-xs text-gray-500">
                            اگر هنوز مشغول به کار هستی، تاریخ پایان را خالی بگذار.
                        </p>
                    </div>

                    <div className="mt-3 flex gap-3">
                        <button
                            type="submit"
                            className="h-11 flex-1 rounded-lg bg-primary font-medium text-white transition"
                        >
                            ثبت سابقه
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="h-11 rounded-lg border border-gray-300 bg-gray-200 px-5 font-medium text-gray-700 transition"
                        >
                            انصراف
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AddWorkModal;
