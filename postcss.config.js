const purgecss = [
    '@fullhuman/postcss-purgecss',
    {
      content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
        const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
        return broadMatches.concat(innerMatches);
      },
    },
]

// The order of export matters, because we need to load Taildwind, then we purge the unnecessary classes and finally
// we process PostCSS and transform it CSS usable by most of the browsers.
module.exports = {
    plugins: [
        'tailwindcss', 
        process.env.NODE_ENV === 'production' ? purgecss : undefined,
        'postcss-preset-env'],
}