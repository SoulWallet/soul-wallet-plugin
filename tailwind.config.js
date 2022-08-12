module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./dist/popup.html"],
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "#3840FF",
                blueDeep: "#514DF5",
            },
        },
    },
    plugins: [require("daisyui")],
};
