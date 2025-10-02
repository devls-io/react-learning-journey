import UserStatusPanel from "./components/UserStatusPanel"

export default function App(){
  return(
    <div className="flex flex-col justify-center items-center min-h-screen gap-6 bg-gray-900" >
      <h1 className="text-4xl font-bold text-white tracking-tight md:text-5xl ">Aprendendo useEffect</h1>
      <UserStatusPanel />
      

    </div>
  )
}
