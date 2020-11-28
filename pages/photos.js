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
                    I started photography around 4 years ago and, since then, it
                    has been the main way for me to express my creativity. My
                    favourite subject is Nature: mountains ⛰, camping under the
                    stars and capture the milky way 🌌, my girlfriend and my
                    friends during our adventures and sometimes some interesting
                    detail that our world offers us 🌿.
                    <br />
                    <br />
                    Here are some of my favourite pictures, I hope you will
                    enjoy going through them.
                </p>
            </section>
            <br />
            <section>{imagesCarousel}</section>
        </>
    )
}

export default Photos
