import React from 'react'

const Event = ({ isYear, sub, children }) => {
    const eventClass = isYear ? 'year-event' : 'event'
    return (
        <div className={eventClass}>
            <div className="event-point"></div>
            <h3>{children}</h3>
            {sub && <p>{sub}</p>}
        </div>
    )
}

export default Event
