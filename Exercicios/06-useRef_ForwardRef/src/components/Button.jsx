export default function Button({children, ...props}){

    const buttonStyle = "mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors cursor-pointer"

    return(
        <button className={buttonStyle} {...props}>{children}</button>
    )

}

