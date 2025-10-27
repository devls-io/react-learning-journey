import { Outlet } from "react-router-dom";

export default function App(){
  return(
    //container principal
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col">

      {/* HEADER Comum a Todas as Páginas */}
      <header className="p-4 bg-indigo-600 shadow-md text-center">
        <h1 className="text-xl font-bold">REACT ROUTER DOM</h1>
      </header>

      {/* OUTLET: Onde o Conteúdo da Rota (Login, Home) será injetado */}
      <main className="grow flex items-center justify-center">
        <Outlet /> 
      </main>

      {/* FOOTER Comum a Todas as Páginas */}
      <footer className="p-3 bg-gray-800 text-center text-sm text-gray-400">
        Desenvolvido por Leonardo Sudré © 2025
      </footer>

    </div>
  )
}