// DESESTRUTURAÇÃO: O componente recebe apenas as props que são listadas entre chaves.

export default function Button({children, type, onPress}){
    return(
        <button className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-200 cursor-pointer w-1/4 max-w-[250px]"
    
        type={type} onClick={onPress}>{children}</button>
    )
}

