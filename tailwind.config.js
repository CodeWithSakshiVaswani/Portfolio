/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                orange: {
                    50: "#ffefe6",
                    100: "#ffcfb0",
                    200: "#ffb78a",
                    300: "#ff9654",
                    400: "#ff8233",
                    500: "#ff6300",
                    600: "#e85a00",
                    700: "#b54600",
                    800: "#8c3600",
                    900: "#6b2a00",
                    default: "#FD6F00",
                    footer: "#E86C0A",
                },
                black: {
                    50: "#e6e6e6",
                    100: "#b0b0b0",
                    200: "#8a8a8a",
                    300: "#545454",
                    400: "#333333",
                    500: "#000000",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                    default: "#EDECEC",
                    grey: "#F8F8F8",
                    border: "#545454",
                    bar: "#D9D9D9",
                    text: "#797979",
                    bordercolor: "#AFAFAF",
                },
                pink: "#FFEBDB",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
