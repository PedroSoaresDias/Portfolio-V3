"use client"

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-gray-950 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-xl font-bold transition-all duration-300 hover:text-purple-600">Pedro Dias</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href={"/#inicio"} className="text-white transition-all duration-300 hover:text-purple-600">Inicio</Link>
              <Link href={"/#skills"} className="text-white transition-all duration-300 hover:text-purple-600">Skills</Link>
              <Link href={"/#projetos"} className="text-white transition-all duration-300 hover:text-purple-600">Projetos</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
              aria-label={"Menu de navegação"}
            >
              {isOpen ? <RxCross2 size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <Link href={"/#inicio"} className="text-white block transition-all duration-300 hover:text-purple-600">Inicio</Link>
            <Link href={"/#skills"} className="text-white block transition-all duration-300 hover:text-purple-600">Skills</Link>
            <Link href={"/#projetos"} className="text-white block transition-all duration-300 hover:text-purple-600">Projetos</Link>
          </div>
        </div>
      )}
    </nav>
  )
}