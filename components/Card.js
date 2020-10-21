import React from 'react'

import Link from 'next/link'

const Card = ({ href, title, techs, hasBorder, isInternal, children }) => {
    const cardClass = hasBorder ? 'border-card' : 'card'

    const renderedCard = (
        <div className={cardClass}>
            <h3>{title}</h3>
            <p>{children}</p>
            {techs && (
                <p className="mt-2">
                    <strong>Technologies:</strong> {techs.join(', ')}
                </p>
            )}
        </div>
    )

    if (isInternal) {
        return (
            <Link href={href}>
                <a>{renderedCard}</a>
            </Link>
        )
    }
    return (
        <a href={href} target="_blank">
            {renderedCard}
        </a>
    )
}

export default Card
