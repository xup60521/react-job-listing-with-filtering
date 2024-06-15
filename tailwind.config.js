/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                league: ["League Spartan", "sans-serif"]
            },
            colors: {
                dark_cyan: "hsl(180, 29%, 50%)",
                bg_cyan: "hsl(180, 52%, 96%)",
                light_cyan: "hsl(180, 31%, 95%)",
                dark_grayish_cyan: "hsl(180, 8%, 52%)",
                very_dark_grayish_cyan: "hsl(180, 14%, 20%)",
            }
        },
    },
    plugins: [],
}

