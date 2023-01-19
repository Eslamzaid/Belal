import React, { createContext, useState } from "react";
import * as ReactDOM from 'react-dom';
import HomeFirst from "./HomeFirstPage/HomeFirst";
import Loading from "./Functionalites/Loading/Loading";
import "./App.css";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isDarkMode, setDarkMode] = React.useState(false);
  const toggleTheme = () => {
    setTheme((curr) => (curr == 'light') ? "dark":"light");
  };
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  const touched = () => {
    setTheme(theme == 'light' ? 'dark': 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
      {isLoading ? <Loading /> : <HomeFirst />}
      </div>
    </ThemeContext.Provider>
  );
}
