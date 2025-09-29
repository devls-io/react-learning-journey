export default function Button({children, variant="primary", ...props}){

    // Base de estilos para todos os botões
    const baseStyles = "py-2 px-4 rounded-lg font-semibold transition-colors duration-200 cursor-pointer shadow-md  min-w-[240px] "

    const variantStyles = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        danger: "bg-red-600 text-white hover:bg-red-700"
    }

    // O componente recebe 'variant' e usa o operador rest para o resto
    // `` porque o className por base só aceita uma string
    return(
        <button className={`${baseStyles} ${variantStyles[variant]}` } {...props}>{children}</button>
    )

}

