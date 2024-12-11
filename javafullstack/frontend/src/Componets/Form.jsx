import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitData = async (e) => {
        e.preventDefault(); // Prevent page reload
        try {
            const response = await axios.post('http://localhost:8081/api/employees', formData); 
            console.log('Data submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="">
            <h2>Form</h2>
            <form className=' border border-[red]  ' onSubmit={submitData}>
                <div className='flex-col justify-center '>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Enter your department"
                    />
                </div>
                </div>
                <div className=''>
                <button type="submit">Submit</button>
                </div>
                
                
            </form>
        </div>
    );
};

export default Form;
