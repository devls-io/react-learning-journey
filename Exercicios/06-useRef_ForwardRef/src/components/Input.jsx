import { forwardRef } from "react";

const Input = forwardRef((props, ref)=> {

    return(
        <input ref={ref} {...props} className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
    )
})

export default Input