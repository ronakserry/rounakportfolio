import { useState } from "react";

import AddBtn from "./AddBtn";
import AddWorkModal from "./AddWorkModal";
import type { Job } from "./AddWorkModal";

function EmptyCircle() {
    return (
        <div className="h-8 w-8 shrink-0 rounded-full border border-primary" />
    );
}

function FullCircle() {
    return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary">
            <div className="h-6 w-6 rounded-full bg-primary" />
        </div>
    );
}

function VL() {
    return <div className="w-0 flex-1 border-l-2 border-primary" />;
}

function Works() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [jobs, setJobs] = useState<Job[]>([]);

    const currentJobs = jobs.filter(
        (job) => !job.endDate.trim()
    );

    const previousJobs = jobs.filter(
        (job) => job.endDate.trim() !== ""
    );

    const timelineJobs = [
        ...currentJobs.map((job) => ({
            job,
            isCurrent: true,
        })),
        ...previousJobs.map((job) => ({
            job,
            isCurrent: false,
        })),
    ];

    function handleAddJob(data: Job) {
        setJobs((prev) => [...prev, data]);
        setIsModalOpen(false);
    }

    return (
        <section className="mt-4 flex w-full flex-col gap-4">
            <div className="flex items-center justify-center gap-3">
                <h6 className="title w-105 text-right font-medium">
                    تا الان کجا کار کردم؟
                </h6>

                <AddBtn
                    onClick={() => setIsModalOpen(true)}
                    ariaLabel="سابقه کاری"
                />
            </div>

            {timelineJobs.length > 0 && (
                <div className="flex flex-col">
                    {timelineJobs.map(({ job, isCurrent }, index) => (
                        <section
                            key={`${job.jobtitle}-${job.startDate}-${index}`}
                            className="flex min-h-16 gap-3"
                        >
                            <div className="flex shrink-0 flex-col items-center self-stretch">
                                {isCurrent ? (
                                    <EmptyCircle />
                                ) : (
                                    <FullCircle />
                                )}

                                {index < timelineJobs.length - 1 && <VL />}
                            </div>

                            <div className="min-w-0 flex-1 pb-4">
                                <h3 className="font-bold">
                                    {job.jobtitle}
                                </h3>

                                <p>{job.company}</p>
                                <p>{job.city}</p>

                                <p>
                                    {job.startDate} تا{" "}
                                    {isCurrent ? "اکنون" : job.endDate}
                                </p>
                            </div>
                        </section>
                    ))}
                </div>
            )}

            {isModalOpen && (
                <AddWorkModal
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddJob}
                />
            )}
        </section>
    );
}

export default Works;
