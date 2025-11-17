export default function Button({action, children,className, ...props}){

    const baseStyle = 'p-2 rounded-lg text-white shadow-lg transition-colors  cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 font-semibold  '

    return(
        <button onClick={action} {...props} className={`${baseStyle} ${className}`}  >
           {children}
        </button>
    )
}