import '../sass/main.scss';
import Header from './Header';
import Search from './Search';
import User from './User';
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  function toggleTheme () {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  useEffect (() => {
    const bodyColor = document.body
    theme === "light" ? bodyColor.id = "light" : bodyColor.id = "dark"
  },[theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className="flex column" id={theme}>
        <Header themeSwitch={toggleTheme} buttonLabel={theme} />
        <Search />
        <User />
      </main>
    </ThemeContext.Provider>
  )  
}

export default App;