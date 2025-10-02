import { useState, useEffect } from "react";
import Button from "./Button";

//URL da API
const API_URL = 'https://jsonplaceholder.typicode.com/users/'

export default function UserStatusPanel(){

    // Estado 1
    const [userId, setUserId] = useState(1)

    // Estado 2: Dados dos usuários

    const [userData, setUserData] = useState(null)

    // Estado 3: Controle Visual

    const [isLoading, setIsloading] = useState(true)

    // Ids máximos de busca para a API
    const MIN_ID = 1
    const MAX_ID = 10

    // Verificar se o ID atual é o min ou max permitido
    const isMin = userId === MIN_ID
    const isMax = userId === MAX_ID

    // Função utilitária para atrasar a execução
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    // UseEffect-> Buscar dados 

    useEffect(()=> {

        setIsloading(true)

        // Função para buscar dados
        const fetchUserData = async ()=> {
            try{

            // Delay proposital para evitar "jerk" (movimento brusco)
                await delay(1000)

                const response = await fetch(`${API_URL}${userId}`)

                if(response.ok){
                    const data = await response.json();
                    setUserData(data)
                } else{
                    setUserData({name: "Usuário não encontrado", username: "N/A"})
                }
            } catch(error){
                console.error("Erro ao buscar dados", error)
            } finally{
                setIsloading(false)
            }

        }
        fetchUserData() // Inicia a busca

        // Função de limpeza (CLEANUP)
        return()=> {
           console.log(`[CLEANUP] Efeito anterior limpo para o usuário ${userId}`);
        }
        
    }, [userId])

    // ------------------------------------------------------- //

    const nexdId = ()=> {
        // Garante que o ID máximo seja 10
        setUserId(prevId => Math.min(MAX_ID, prevId +1))
    }

    const lastId = ()=> {
        // Impede que o ID seja 0 ou negativos
        setUserId(prevId=> Math.max(MIN_ID, prevId -1))
    }

    return (
        <div className="p-6 bg-zinc-800 rounded-xl shadow-lg text-white  mx-auto flex flex-col gap-2  max-w-[600px] w-3/4 items-center  border-yellow-200/60 border-x-4" >

            <h2 className="text-3xl font-bold">Painel de Status</h2>

            {isLoading ? (
                <div className="flex flex-col justify-center h-12"> 
                    <p className="text-yellow-400 text-center text-lg">Carregando Dados...</p>
                </div>
            ) : (
                <div className="flex flex-col justify-center h-12">
                    <p className="text-lg">Nome: {userData.name}</p>
                    <p className="text-sm text-gray-400">Username: {userData.username}</p>
                </div>
            )}

            <div className=" p-4 flex flex-col gap-4 items-center justify-center w-full ">
                <Button disabled={isMin || isLoading}  onClick={()=> lastId()} > Anterior</Button>

                <Button disabled={isMax || isLoading} onClick={()=> nexdId()}>Proximo</Button>
            </div>
            
            
         
        </div>
    );



}