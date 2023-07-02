/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "576px",
            // => @media (min-width: 576px) { ... }

            md: "960px",
            // => @media (min-width: 960px) { ... }

            lg: "1440px",
            // => @media (min-width: 1440px) { ... }
        },
        extend: {
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            animation: {
              wiggle: 'wiggle 1s ease-in-out infinite',
            }
        },
    },
    plugins: [],
};
