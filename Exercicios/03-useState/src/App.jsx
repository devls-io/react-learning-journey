import List from "./components/List"

export default function App(){
  return(
    <div className=" flex flex-col gap-6 p-6 min-h-screen justify-center items-center bg-[#242424] text-white  ">

      <h1 className=" text-4xl font-bold tracking-tight lg:text-5xl">Aprendendo o primeiro Hook useState</h1>

      <List className="bg-cyan-950 p-14 rounded-2xl flex flex-col items-center gap-6 w-2/3 max-w-[600px] border-2" />

      
    </div>
  )
}




