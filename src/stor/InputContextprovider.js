import React, { createContext, useState } from "react";

const inputContext = createContext();

function InputContextprovider({Children}) {
    const [formData, setformData] = useState({
        username: "",
        email: "",
        password: "",
    })
    return(
        <inputContext.Provider value={{formData, setformData}}>
            {Children}
        </inputContext.Provider>
    );
}
export default InputContextprovider;