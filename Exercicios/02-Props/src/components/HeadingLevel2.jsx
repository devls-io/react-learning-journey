// FORMA BÁSICA: O componente recebe todas as props em um único objeto chamado "props".
// Para acessar, você usa "props.nome_da_prop".

export default function HeadingLevel2(props){
    return(
        <h2
        className="text-2xl font-semibold text-gray-400"
        
        >{props.title}</h2>
    )
}