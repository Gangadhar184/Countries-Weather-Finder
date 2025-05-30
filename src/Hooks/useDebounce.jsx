
import { useState, useEffect } from "react"

const useDebounce = (value, delay=500) => {
    const [debounce, setDebounce] = useState(value);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounce(value)
        },delay);

        //clear timeout
        return () => clearTimeout(timer);
    }, [value, delay])
    
    return debounce;
}

export default useDebounce
