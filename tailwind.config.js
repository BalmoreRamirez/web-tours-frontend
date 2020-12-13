/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {
      extend: {
        transitionProperty: {
          'height': "height",
          'width': "width",
          'spacing': "margin, padding"
        },
        colors: {
          orange: {
            "100": "#FEF3E6",
            "200": "#FCE2BF",
            "300": "#F9D099",
            "400": "#F5AD4D",
            "500": "#F18a00",
            "600": "#D97C00",
            "700": "#915300",
            "800": "#6C3E00",
            "900": "#082D08"
          },
          red: {
            "100": "#FDEEEE",
            "200": "#FAD5D5",
            "300": "#F7BCBC",
            "400": "#F18989",
            "500": "#EB5757",
            "600": "#D44E4E",
            "700": "#8D3434",
            "800": "#6A2727",
            "900": "#471A1A"
          },
          coral: {
            "100": "#FDEEEE",
            "200": "#FAD5D5",
            "300": "#F7BCBC",
            "400": "#F18989",
            "500": "#EB5757",
            "600": "#D44E4E",
            "700": "#8D3434",
            "800": "#6A2727",
            "900": "#471A1A"
          },
          blue: {
            "100": "#E6EEF5",
            "200": "#BFD4E6",
            "300": "#99BAD7",
            "400": "#4D86BA",
            "500": "#00529C",
            "600": "#004A8C",
            "700": "#00315E",
            "800": "#002546",
            "900": "#00192F"
          },
          "blue-secondary": {
            "100": "#EAEDF7",
            "200": "#CAD3EB",
            "300": "#AAB9DE",
            "400": "#6B84C6",
            "500": "#2B4FAD",
            "600": "#27479C",
            "700": "#1A2F68",
            "800": "#13244E",
            "900": "#0D1834"
          },
          "light-blue": {
            "100": "#EFF7FC",
            "200": "#D7ECF8",
            "300": "#BFE1F4",
            "400": "#8ECAEC",
            "500": "#5EB3E4",
            "600": "#55A1CD",
            "700": "#386B89",
            "800": "#2A5167",
            "900": "#1C3644"
          },
          "dark-blue": {
            "100": "#E6EBF1",
            "200": "#BFCEDB",
            "300": "#99B0C6",
            "400": "#4D759B",
            "500": "#003A70",
            "600": "#003465",
            "700": "#002343",
            "800": "#001A32",
            "900": "#001122"
          },
          "light-gray": "#FAFAFA",
          "gray-secondary": "#828282",
          "light-orange": "#FFFBF7"
        },
        screens: {
          xs: "520px"
          // => @media (min-width: 520px) { ... }
        },
        spacing: {
          "80": "21.5rem"
        },
        maxWidth: {
          "6xl": "80rem"
        },
        fontSize: {
          "7xl": "5rem"
        }
      }
    },
    variants: {    
      backgroundColor: ["responsive", "hover", "focus", "group-hover", 'odd'], 
      margin: ['responsive', 'group-hover'],
    },
    plugins: []
  };
  