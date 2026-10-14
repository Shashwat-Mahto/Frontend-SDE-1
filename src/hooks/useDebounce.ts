import { useEffect, useState } from "react";

// this function will return debounced value
function useDebounce(value:any , delay:number = 500):any{

    const [debouncedValue , setDebouncedValue] = useState(value);

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setDebouncedValue(value)
        } , delay)

        return ()=>{
            clearTimeout(timer);
        }
    } , [delay , value])

    return debouncedValue;
}

export default useDebounce