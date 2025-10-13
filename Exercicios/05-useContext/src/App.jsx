import { createContext, useState } from "react";
import Section from "./components/Section";
import Button from "./components/Button";

export const ThemeContext = createContext(null)

export default function App(){

  const [theme, setTheme] = useState('light')

  // API de contexto
  const themeApi = {
    theme,
    toggleTheme: ()=> setTheme(prevTheme=> (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return(
    <ThemeContext value={themeApi}>
        <div className={`flex flex-col min-h-screen items-center pt-10 transition-colors ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-gray-200 text-black'}`}>

          <h1 className="text-3xl">Aplicativo Principal - Tema {theme}</h1>

          <Section></Section>

          <Button useTheme={false} className="border-2 bg-red-400 hover:bg-red-700 text-white border-none"  onClick={()=> alert("Esse botão não tem função 😅")}>Botão Genérico</Button>

        </div>
    </ThemeContext>
  )

}

