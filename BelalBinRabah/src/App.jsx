import React, { createContext, useState } from "react";
import HomeFirst from "./HomeFirstPage/HomeFirst";
import Loading from "./Functionalites/Loading/Loading";
// import ThemeSwitcher from "./Functionalites/Theme/Theme";
import "./App.css";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr == "light") ? "dark":"light");
  };
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
      {isLoading ? <Loading /> : <HomeFirst />}
      </div>
    </ThemeContext.Provider>
  );
}
