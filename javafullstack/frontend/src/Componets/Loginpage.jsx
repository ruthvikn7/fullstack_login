import * as React from "react";
import { LoginForm } from "./Logiform";

export function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#080411] p-4">
      <div className="relative w-full max-w-md z-10">
        <LoginForm />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8debf490df486704ee3847451ccf42834a29c97e5f50a3c9ad773ff108a81200?placeholderIfAbsent=true&apiKey=203fd6e106e3416b83f8c1e51bde7d94"
          alt=""
          className="object-contain absolute top-0 left-2 z-0 max-w-full aspect-[0.73] h-[198px] w-[145px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a658eb696843058cc94c6d6b6a8fe26942b0f0a116e8e7b48c4d2777fe8a55ac?placeholderIfAbsent=true&apiKey=203fd6e106e3416b83f8c1e51bde7d94"
          alt=""
          className="object-contain absolute right-0 bottom-0 z-0 max-w-full aspect-[1.23] h-[213px] w-[261px]"
        />
    </main>
  );
}