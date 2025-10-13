import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Button({children, onClick, useTheme = true , className = "" }){

    // Garantir que o contexto nulo nunca será escolhido
    const { theme, toggleTheme } = useTheme ? useContext(ThemeContext) ?? {} : {};


    // 🔍 Só aplica as classes de tema se o contexto estiver ativo
    //Se usar tema então:
        //Se tema for dark → classes dark, senão → classes light
    //Se não usar tema → vazio
    const themedClasses = useTheme
    ? theme === "dark"
      ? "bg-yellow-400 text-zinc-900 hover:bg-yellow-500"
      : "bg-gray-700 text-white hover:bg-gray-800"
    : "";

    return(
        <button onClick={onClick || toggleTheme} className={`px-4 py-2 rounded-full font-bold transition-colors shadow-md cursor-pointer ${themedClasses} ${className}`}>
            
            {children || `Trocar para Modo ${theme === "light" ? "Escuro 🌙" : "Claro ☀️"}`}
        </button>
    )

}