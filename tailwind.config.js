const isCustomDomainless = process.env.NODE_ENV === 'production'

let assetPath = isProd ? '' : '' /* /tsubaki.github.io/ should be in the url if not on a custom domain */
let tsubakiURL = assetPath + '/images/not-tsubaki.png'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tsubaki': 'url(' + tsubakiURL + ')',
      },
    },
  },
  plugins: [],
}
