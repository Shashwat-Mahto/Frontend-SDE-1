import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function Debounce(){

    const [value , setValue] = useState("");
    const debouncedValue = useDebounce(value , 500)
    return (
        <div>
            <input type="text" value={value} 
            onChange={(e)=>{
                setValue(e.target.value)
            }}/>

            <div>
                <p>Normal Value: {value} </p>
                <p>Debounced Value: {debouncedValue} </p>
                
            </div>
        </div>
    )

}

export default Debounce;