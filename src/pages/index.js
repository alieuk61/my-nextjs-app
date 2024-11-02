import Image from "next/image";
import React, { useEffect } from "react";
import BoardHeader from "@/components/header";
import '@/styles/globals.css'

export default function Home() {

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, [])

  return (
    <div className="h-full w-full">
      <BoardHeader />
    </div>
  );
}
