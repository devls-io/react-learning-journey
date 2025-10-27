export default function Button({children, ...props}){
    return(
        <button  {...props} className="bg-indigo-500 px-4 py-2 block hover:bg-indigo-800 rounded-sm  text-center font-bold transition-colors shadow-lg cursor-pointer">
            {children}
        </button>
    )
}