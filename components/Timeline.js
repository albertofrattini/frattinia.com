import React, { useState } from 'react'

import Event from './Event'

const Timeline = () => {
    const [showMore, setMore] = useState(false)

    const additionalTimeline = showMore ? (
        <div className="animate-open">
            <Event>
                Started studying and using React to develop Emozionalmente
            </Event>
            <Event>Created Fantacalcio auction website</Event>
            <Event>Started using Javascript, HTML and CSS 👨🏻‍💻</Event>
            <br />
            <Event isYear>2019</Event>
            <br />
            <Event>Lean Startup Program</Event>
            <Event>Met my girlfriend 👩🏻</Event>
            <Event>Went to Spain (A Coruña) for my Erasmus 🇪🇸</Event>
            <br />
            <Event isYear>2018</Event>
            <br />
            <Event>
                Started Computer Engineering Master @ Politecnico di Milano
            </Event>
            <Event>Bachelor graduation 👨🏻‍🎓</Event>
            <Event>Moved back home for 6 months</Event>
            <br />
            <Event isYear>2017</Event>
            <br />
            <Event>Started photography 📷</Event>
            <br />
            <Event isYear>2016</Event>
            <br />
            <Event>Learned my first programming language: C</Event>
            <Event>Started Computer Engineering @ Politecnico di Milano</Event>
            <br />
            <Event isYear>2014</Event>
            <br />
            <Event>Started playing guitar 🎸</Event>
            <br />
            <Event isYear>2007</Event>
            <br />
            <Event>Started playing football ⚽</Event>
            <br />
            <Event isYear>2001</Event>
            <br />
            <Event>Born 👶🏻</Event>
            <br />
            <Event isYear>1995</Event>
        </div>
    ) : null

    return (
        <>
            <div className="flex">
                <div className="time-line">
                    <div className="bg-secondary w-px h-full mx-auto"></div>
                </div>
                <div className="event-list">
                    <Event sub="Finally my first job as a Software Engineer!">
                        First Job @ Socialbakers
                    </Event>
                    <Event sub="You know, in these days this is the way graduations happen. It was an interesting experience, but for sure it could not replace what could have happened face-to-face">
                        Graduated on a video-call 👨🏻‍🎓
                    </Event>
                    <Event>Covid-19 started to spread 🦠</Event>
                    <Event>Created Emozionalmente for my Master Thesis</Event>
                    <br />
                    <Event isYear>2020</Event>
                    <br />
                    <Event>Moved to Prague 🏰</Event>
                    {additionalTimeline}
                </div>
            </div>
            {!showMore && (
                <div className="flex justify-center">
                    <button
                        className="rounded px-4 py-2 my-8 hover:bg-gray-200"
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
