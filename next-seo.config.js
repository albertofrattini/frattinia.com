const title = 'Alberto Frattini – Developer, photographer and writer'
const description =
    'Front-end and Back-end developer, mainly using Javascript alongside React and Node. Adventure photography lover listening to electronic music and trying to write about interesting stuff.'

const SEO = {
    title,
    description,
    canonical: 'https://albertofrattini.com',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://albertofrattini.com',
        title,
        description,
        images: [
            {
                url: 'https://albertofrattini.com/static/images/og.png',
                alt: title,
                width: 1280,
                height: 720,
            },
        ],
    },
    twitter: {
        handle: '@albertofrattini',
        site: '@albertofrattini',
        cardType: 'summary_large_image',
    },
}

export default SEO
