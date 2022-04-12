const title = 'Alberto Frattini – Who else?';
const description =
    'TODO: description. If you read this, send me a message to remind me.';

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
};

export default SEO;
