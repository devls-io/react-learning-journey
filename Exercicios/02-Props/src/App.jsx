import HeadingLevel2 from "./components/HeadingLevel2"
import Input from "./components/Input"
import Button from "./components/Button"
export default function App(){

  const handleClick = ()=> {
    alert("Você clicou no botão!")
  }

  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424]  text-gray-200 gap-6  p-4 ">


      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl ">Entendendo uso de Props</h1>

      <HeadingLevel2 title="Este é um exemplo de h2" />

      <Input  type="text" placeholder="Digite Qualquer Texto" />

      <Button type="button" onPress={handleClick}>Botão</Button>
    </div>
  )
}




