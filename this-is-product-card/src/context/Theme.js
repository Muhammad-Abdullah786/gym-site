
import { useContext, createContext } from 'react';

export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => { },
  lightTheme: () => { },
})//giving default value

//Provider

export const ThemeProvider = ThemeContext.Provider

//custom hook where we will useTheme
export default function useTheme() {
  return useContext(ThemeContext)
}


