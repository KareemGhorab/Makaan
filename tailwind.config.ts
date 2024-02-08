import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            maxWidth: {
                app: '1320px',
            },
            width: {
                app: '1320px',
            },
            colors: {
                primary: { 1: '#00b98e', 2: '#26c49f', 3: '#effdf5' },
                secondary: { 1: '#0e2e50', 2: '#0c2744' },
            },
        },
    },
    plugins: [],
}
export default config
