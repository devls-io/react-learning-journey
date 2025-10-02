export default function Button({children, ...props}){

    const baseStyles = " bg-indigo-600 hover:bg-indigo-700 text-white font-bold  py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer min-w-1/2 "

    const disabledStyles = "disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"; 

    const classes = `${baseStyles} ${disabledStyles}`

    return(
        <button type="button" 
        className={classes}
        {...props}>

            {children}
        </button>
    )

}



