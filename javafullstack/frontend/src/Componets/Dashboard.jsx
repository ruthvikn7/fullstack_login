import React, { useContext, useState } from 'react'
import context from './Context_Api/Context';
import Dashboard1 from './Dashboard1';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [count,setCount]=useState(0);
    const { count1, setCount1 } = useContext(context);
    const navigate = useNavigate()
    const handleOnclick=()=>{
        setCount1(count1+1);
    }
  return (
    <div className='border border-[red]  justify-items-center'>
        <div>count={count1}</div>
        <button className='bg-[red]' onClick={handleOnclick}>click me</button>
        <button onClick={()=>{
            navigate("/dashboard1")
        }}>navigate to 1</button>
    </div>
  )
}

export default Dashboard