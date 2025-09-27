// OPERADOR REST: O componente coleta todas as props em um único objeto
// chamado "props" e as passa para o elemento HTML. Ideal para componentes flexíveis.

export default function Input({...props}){
    return(
        <input  className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 w-1/2 max-w-lg "
    
        {...props}/>
    )
}

