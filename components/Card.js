import React from 'react'

const Card = ({ href, title, techs, children }) => {
    const renderedCard = (
        <div className="p-4 border-solid border rounded border-gray-400 mb-4">
            <h3>{title}</h3>
            <p className="mb-0">{children}</p>
            {techs && (
                <p className="mt-2 mb-0">
                    <strong>Technologies:</strong> {techs.join(', ')}
                </p>
            )}
        </div>
    )

    return (
        <a href={href} target="_blank">
            {renderedCard}
        </a>
    )
}

export default Card
