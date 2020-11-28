import React from 'react'

import imagesList from '../config/images'
import { NextSeo } from 'next-seo'
import GridImage from '../components/GridImage'

const url = 'https://albertofrattini.com/photos'
const title = 'Photos – Alberto Frattini'

const Photos = () => {
    const imagesCarousel = imagesList.map(({ urls, shape }) => {
        const size =
            shape === 'horizontal'
                ? { width: 648, height: 432 }
                : { width: 432, height: 648 }
        return <GridImage urls={urls} isRow={urls.length > 1} {...size} />
    })

    return (
        <>
            <NextSeo
                title={title}
                canonical={url}
                openGraph={{
                    url,
                    title,
                }}
            />
            <section>
                <p>
                    I am an Italian developer 👨🏻‍💻 and, somehow, a creative. I am
                    now living in Prague 🏰 and I am working as a Software
                    Engineer at Socialbakers.
                </p>
            </section>
            <br />
            <section>{imagesCarousel}</section>
        </>
    )
}

export default Photos
