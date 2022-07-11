import '../sass/main.scss';
import Header from './Header';
import Search from './Search';
import User from './User';
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("");
  const [userData, setUserData] = useState({})

  useEffect (() => {
    let themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (themePreference) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [] )

  function toggleTheme () {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  useEffect (() => {
    const bodyColor = document.body
    theme === "light" ? bodyColor.id = "light" : bodyColor.id = "dark"
  },[theme])

  function getResponse(userData){
    setUserData(userData)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className="flex column" id={theme}>
        <div className="loader">
          <div>
            <h1>devfinder</h1>
          </div>
        </div>
          <Header themeSwitch={toggleTheme} buttonLabel={theme} />
          <Search getRes={getResponse} />
          <User userData={userData} />
      </main>
    </ThemeContext.Provider>
  )  
}

export default App;