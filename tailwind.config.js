/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#A07260",
                    secondary: "#f6d860",
                    accent: "#F36A6A",
                    neutral: "#fcfcfc",
                    "base-100": "#FCF8F8",
                    "base-200":"#fff2ef",
                },
            },
            "dark",
            "cupcake",
        ],
    },
}
