module.exports = {
    purge: [
        './page/**/*.{js, ts, jsx,, tsx}',
        './components/**/*.{js, ts, jsx, tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                richBlackFogra: '#0B090A',
                eerieBlack: '#161A1D',
                bloodRed: '#660708',
                rubyRed: '#A4161A',
                carnelian: '#BA181B',
                imperialRed: '#E5383B',
                silverChalice: '#B1A7A6',
                lightGray: '#D3D3D3',
                cultured: '#F5F3F4',
                white: '#FFFFFF',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        },
    },
    plugins: ['tailwindcss'],
}
