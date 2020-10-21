module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
        // defaultLineHeights: true,
        // standardFontWeights: true
    },
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['components/**/*.js', 'pages/**/*.js'],
    },
    theme: {
        fontFamily: {
            display: ['Open Sans', 'sans-serif'],
            body: ['Mulish', 'sans-serif'],
            mono: ['Roboto Mono', 'monospace'],
        },
        extend: {
            width: {
                '48px': '48px',
                point: '13px',
            },
            height: {
                point: '13px',
            },
            opacity: {
                99: '0.99',
            },
            colors: {
                fire: '#EC564D',
            },
            margin: {
                'time-inset': '-30px',
            },
            animation: {
                open: 'open 0.5s linear',
            },
            keyframes: {
                open: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    variants: {},
    plugins: [],
}
