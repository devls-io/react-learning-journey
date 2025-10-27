import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";


export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate() // Hook para redirecionamento

    const handleLogin = (e)=> {
        e.preventDefault()

        // Simular autenticação
        if(email === 'teste@email.com' && password === "teste123"){
            alert('Sucesso! Redirecionando')
            // Remove a rota do histórico 
            navigate('/dashboard', {replace: true})
        } else{
            alert("Dados inválidos.")
        }
    }

    return(
        <div className="p-10 bg-zinc-800 rounded-xl max-w-md mx-auto border-b-4 border-b-indigo-200">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Entre com sua conta</h2>

            <form onSubmit={handleLogin} className="flex flex-col gap-4 mb-4">
                <Input type="email" placeholder="email" required value={email} onChange={(e)=> setEmail(e.target.value)} />

                <Input type="password" placeholder="senha" required value={password} onChange={(e)=> setPassword(e.target.value)}/>

                <Button type="submit">Logar</Button>

            </form>

            <Link 
                to="/" replace={true}
                className=" bg-gray-600 px-4 py-2 block hover:bg-gray-500   rounded-sm  text-center font-bold transition-colors shadow-lg "
            >
                Voltar a Home 
            </Link>

            


        </div>
    )


}