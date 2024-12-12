import React, { useContext, useState } from 'react';
import context from './Context_Api/Context';
import { useNavigate } from 'react-router-dom';

const Dashboard1 = () => {
    const [count, setCount] = useState(0);
    const { count1, setCount1 } = useContext(context);
    const navigate = useNavigate();

    const handleOnclick = () => {
        setCount1(count1 + 1);
    }

    return (
        <div className="h-screen flex  justify-center items-center bg-gray-100">
            <div className="border border-blue-500 p-8 rounded-md bg-white">
                <div>Count: {count1}</div>
                <button 
                    className="bg-green-500 text-white p-2 mt-4 rounded"
                    onClick={handleOnclick}
                >
                    Click me
                </button>
                <button 
                    className="bg-gray-500 text-white p-2 mt-4 rounded ml-4"
                    onClick={() => navigate(-1)}
                >
                    Navigate back
                </button>
            </div>
        </div>
    );
}

export default Dashboard1;
