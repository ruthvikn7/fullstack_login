import React, { useState } from 'react';  
import context from "./Context"; 

const Contextprovider = ({ children }) => {
    const [count1, setCount1] = useState(0);

    return (
        <context.Provider value={{ count1, setCount1 }}>
            {children}
        </context.Provider>
    );
};

export default Contextprovider;
