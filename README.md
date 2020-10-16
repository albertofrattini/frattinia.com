This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, we need to create the project:

```bash
npx create-next-app <project_name>
```

Then we can start adding other dependencies:

```bash
npm i tailwindcss
npx tailwindcss init -p
```

These two commands will add tailwindcss to `package.json` and create two required files: `tailwind.config.js` and `postcss.config.js`, a file to add tailwindcss as a plugin in the build chain. Installing then `postcss-preset-env` will translate PostCSS into CSS that most browsers can understand. After installation, we need to add to plugins in `postcss.config.js`. The final content will look like this:

```bash
module.exports = {
    plugins: ['tailwindcss', 'postcss-preset-env'],
}
```

In the end, we can add `purge-css` in order to remove unused classes from the final HTML and make it faster to load.


