import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function FormInput({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  error, 
  showToggle = false, 
  onToggle 
}) {

  return (
    <div className="flex flex-col w-full">
      <label
        className="text-sm font-medium leading-none text-white"
        htmlFor={`${label.toLowerCase()}-input`}
      >
        {label} *
      </label>
      <div className="relative mt-1.5">
        <input
          type={type}
          id={`${label.toLowerCase()}-input`}
          className={`flex overflow-hidden gap-2 items-center px-3.5 py-2.5 w-full text-base text-gray-500 bg-white rounded-lg border ${
            error ? "border-red-500" : "border-gray-300"
          } border-solid shadow-sm`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-label={label}
        />
        {showToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            onClick={onToggle}
          >
            {type === "password" ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        )}
      </div>
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate =useNavigate();


  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   newErrors.email = "Please enter a valid email address.";
    //   valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const loginData = {
        username: email,
        password: password,
      };
      try {
        const response =await axios.post("http://localhost:8081/api/auth/login",loginData);
        if(response.data.token){
          navigate("/dashboard")
        }
        console.log(response)
      } catch (error) {
        console.error("Login error:", error);
      }
  
  };

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
      <section className="flex flex-col w-full text-center text-white">
        <header className="flex flex-col items-center w-full">
          <h1 className="text-3xl font-semibold leading-none">Log in to your account</h1>
          <p className="mt-3 text-base">Welcome back! Please enter your details.</p>
        </header>
      </section>

      <div className="flex flex-col mt-8 w-full rounded-xl">
        <div className="flex flex-col w-full">
          <FormInput
            label="Email"
            // type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <div className="mt-5">
            <FormInput
              label="Password"
              type={passwordType}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              showToggle={true}
              onToggle={() =>
                setPasswordType(passwordType === "password" ? "text" : "password")
              }
            />
          </div>
        </div>

        <div className="flex mt-6 w-full">
          <a
            href="https://quikynet.com/forgot-password"
            className="overflow-hidden gap-2 self-stretch h-full text-sm font-semibold leading-none text-white w-full text-end  py-1 "
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="overflow-hidden gap-2 mt-6 px-5 py-2.5 w-full text-base font-semibold text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm"
        >
          Log in
        </button>
      </div>
      <div className="flex flex-col items-center mt-6">
        <p className="text-sm text-white">
          Don’t have an account?{" "}
          <a
            href="https://quikynet.com/create-quickynet"
            className="text-violet-500 font-semibold"
          >
            Sign up
          </a>
        </p>
      </div>
    </form>
  );
}
