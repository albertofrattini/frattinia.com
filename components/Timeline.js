import React, { useState } from 'react'

import Event from './Event'

const Timeline = () => {
    const [showMore, setMore] = useState(false)

    const additionalTimeline = showMore ? (
        <div className="animate-open">
            <Event
                sub="You’ve found my personal slice of the internet – everything
                    you want to know and more is here."
            >
                First Job @ Socialbakers
            </Event>
            <Event>Graduated on a video-call 🎓</Event>
            <Event>Create Emozionalmente for my Master Thesis</Event>
            <br />
            <Event isYear>2020</Event>
            <br />
            <Event>Moved to Prague</Event>
            <Event
                sub="You’ve found my personal slice of the internet – everything
                    you want to know and more is here."
            >
                First Job @ Socialbakers
            </Event>
            <Event>Graduated on a video-call 🎓</Event>
            <Event>Create Emozionalmente for my Master Thesis</Event>
            <br />
            <Event isYear>2020</Event>
            <br />
            <Event>Moved to Prague</Event>
        </div>
    ) : null

    return (
        <>
            <div className="flex">
                <div className="time-line">
                    <div className="bg-fire w-px h-full mx-auto"></div>
                </div>
                <div className="event-list">
                    <Event
                        sub="You’ve found my personal slice of the internet – everything
                    you want to know and more is here."
                    >
                        First Job @ Socialbakers
                    </Event>
                    <Event>Graduated on a video-call 🎓</Event>
                    <Event>Create Emozionalmente for my Master Thesis</Event>
                    <br />
                    <Event isYear>2020</Event>
                    <br />
                    <Event>Moved to Prague</Event>
                    {additionalTimeline}
                </div>
            </div>
            {!showMore && (
                <div className="flex justify-center">
                    <button
                        className="border border-solid rounded px-4 py-2 my-16"
                        onClick={() => setMore(true)}
                    >
                        See more &darr;
                    </button>
                </div>
            )}
        </>
    )
}

export default Timeline
