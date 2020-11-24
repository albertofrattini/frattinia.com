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
            fontFamily: {
                hsans: ['Source Sans Pro', 'sans-serif'],
                sans: ['Mulish', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
                serif: ['Merriweather', 'sans-serif'],
            },
            boxShadow: {
                blurred: '0 1px 16px rgba(0,0,0,0.05)',
            },
            width: {
                '48px': '48px',
                point: '13px',
            },
            height: {
                point: '13px',
            },
            minHeight: {
                header: '256px',
            },
            opacity: {
                99: '0.99',
            },
            colors: {
                primary: '#105EDB',
                secondary: '#EC564D',
                fosforescent: '#64F58D',
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
