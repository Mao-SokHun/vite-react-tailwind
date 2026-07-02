import React from "react";
import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <Sparkles className="mx-auto h-12 w-12 text-blue-400 animate-pulse" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight">React + Vite + Tailwind</h1>
        <p className="mt-2 text-zinc-400">Successfully loaded template structure!</p>
      </div>
    </div>
  );
}