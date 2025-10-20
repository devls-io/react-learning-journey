import Input from "./Input";
import Button from "./Button";

import { useRef,  useEffect } from "react";

export default function LoginForm(){

    const inputRef = useRef(null)

    const passwordRef = useRef(null)

    const handleSubmit = (e)=> {
        e.preventDefault();

        // Ação imperativa e acesso ao DOM
        inputRef.current.value = ''
        passwordRef.current.value = ''

        alert("Formulário Submetido para o backend! 😁")

        inputRef.current.focus()
    }

    useEffect(()=> {
        inputRef.current.focus()
    }, [])

return (
    <form onSubmit={handleSubmit} className="border-x-2  border-white/40 rounded-3xl p-10 flex flex-col gap-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  "> 
        
        <h1 className="m-auto text-4xl font-bold text-indigo-400 mb-6">UseRef & ForwardRef</h1>
        
    
        <Input ref={inputRef} type="text" required placeholder="username (foco automático)" />

       
        <Input ref={passwordRef} type="password" required placeholder="senha" />
        
        <Button>Logar</Button>
        
    </form>
    );
}
