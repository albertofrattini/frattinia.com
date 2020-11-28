import React from 'react'
import Image from 'next/image'

const wrapInFlex = (children) => <div className="flex">{children}</div>

const GridImage = ({ urls, width, height, isRow }) => {
    const imagesToRender = urls.map((imageUrl) => (
        <div className="w-full pb-8 px-2">
            <Image
                className="object-cover"
                src={imageUrl}
                layout="responsive"
                width={width}
                height={height}
            />
        </div>
    ))
    return <>{isRow ? wrapInFlex(imagesToRender) : imagesToRender}</>
}

export default GridImage
