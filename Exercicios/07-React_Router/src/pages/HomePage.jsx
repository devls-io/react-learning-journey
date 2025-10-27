import { Link } from "react-router-dom"

export default function HomePage(){
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-6 font-bold">Bem vindo(a) à Aplicação!</h1>
            <p className="mb-12 text-[18px] text-justify p-4">Está é a página de acesso público. Para ver mais conteúdo clique no botão abaixo e faça login com sua conta. </p>

            {/* O LINK substitui a tag <a> para navegação interna */}

            <Link 
                to="/login" replace={true}
                className="bg-indigo-500 px-4 py-2 block hover:bg-indigo-800 rounded-sm  text-center font-bold transition-colors shadow-lg"
            >
                Ir para Login
            </Link>

        </div>
    )
    
}