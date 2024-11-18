/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            softred: "hsl(7, 99%, 70%)",
            yellow: "hsl(51, 100%, 49%)",
            "graphic-design-txt": "hsl(167, 40%, 24%)",
            "photography-txt": "hsl(198, 62%, 26%)",
            footer: "hsl(168, 34%, 41%)",
            "grey-1": "hsl(210, 4%, 67%)",
            "grey-2": "hsl(232, 10%, 55%)",
            "grey-3": "hsl(213, 9%, 39%)",
            "grey-4": "hsl(212, 27%, 19%)",
            white: "hsl(0, 0%, 100%)",
            transparent: "transparent",
        },
        fontFamily: {
            fraunces: ["Fraunces", "serif"],
            barlow: ["Barlow", "serif"],
        },
    },
    variants: {
        fill: ["hover", "focus"],
    },
    plugins: [],
};
