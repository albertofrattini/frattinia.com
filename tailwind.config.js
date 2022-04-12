module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
        // defaultLineHeights: true,
        // standardFontWeights: true
    },
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['components/**/*.js', 'pages/**/*.js', 'templates/**/*.js'],
    },
    theme: {
        extend: {
            colors: {
                primary: '#105EDB',
                secondary: '#EC564D',
                fosforescent: '#64F58D',
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
};
