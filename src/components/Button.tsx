import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyle = "px-4 py-2 rounded-md font-medium transition-colors";
  const styles = variant === "primary" 
    ? "bg-blue-600 hover:bg-blue-700 text-white" 
    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200";
    
  return (
    <button className={`${baseStyle} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}