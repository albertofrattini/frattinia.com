import React from 'react'

const Card = ({ href, title, techs, children }) => {
    const renderedCard = (
        <div className="p-4 border-solid border rounded border-gray-300 mb-4 duration-200 hover:shadow">
            <h3>{title}</h3>
            <p className="mb-0 leading-snug">{children}</p>
            {techs && (
                <p className="mt-1 mb-0 text-sm">
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
