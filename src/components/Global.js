import { createTheme, ThemeProvider } from "@mui/material";

import { createContext, useState } from "react";

export const UserContext = createContext();

const theme = createTheme({
  palette: {
    error: {
      main: "#fd2020",
    },
  },
  typography:{
    h5:{
      fontFamily:'RocknRoll One'
    }
  }
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  

  const info = {
    user,
    setUser,
   
  };

  return (
    <UserContext.Provider value={info}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UserContext.Provider>
  );
};