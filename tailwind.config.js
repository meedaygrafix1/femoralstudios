/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'gradient': 'gradient 8s ease infinite',
            },
            // Keyframes are already in index.css, so technically redundant here if defined in CSS,
            // but keeping the config clean. We rely on index.css for custom keyframes.
            backgroundSize: {
                '300%': '300%',
            }
        },
    },
    plugins: [],
}
