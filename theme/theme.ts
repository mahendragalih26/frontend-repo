import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    // "fontFamily": `"Ubuntu", sans-serif`,
    fontFamily: `"Roboto-Regular", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#1B1464",
    },
    secondary: {
      main: "#FFFFFF",
    },
    info: {
      main: "rgb(170 201 255 / 40%)",
    },
  },
})

export default theme
