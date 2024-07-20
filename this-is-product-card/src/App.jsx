import { useState, useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/Theme";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  // now actual change in a theme
  useEffect(() => {
    const htmlElement = document.querySelector("html");

    htmlElement.classList.remove("dark", "light"); // if dark and light exist remove them from html

    // now add
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-gray-100">
        <div className="w-full">
          <ThemeBtn></ThemeBtn>
          <Card></Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
