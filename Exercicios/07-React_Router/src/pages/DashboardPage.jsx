import { Link } from "react-router-dom"

export default function DashboardPage(){
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-6 font-bold">Dashboard</h1>
            <p className=" p-4 mb-12 text-[18px] text-justify">Parabéns, você conseguiu logar com sucesso e chegar até a ultima parte da aplicação! </p>

           

            <Link 
                to="/" replace={true}
                className="bg-indigo-500 px-4 py-2 block hover:bg-indigo-800 rounded-sm  text-center font-bold transition-colors shadow-lg"
            >
               Logout
            </Link>

        </div>
    )
}