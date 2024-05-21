"use client"

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <motion.nav
      className="bg-gray-950 fixed w-full"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-white text-xl font-bold transition-all duration-200 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr hover:from-sky-500 hover:to-purple-500">
                Portfólio
              </h1>
            </motion.div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={"/#inicio"} className="text-white transition-all duration-300 hover:text-purple-600">Inicio</Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={"/#skills"} className="text-white transition-all duration-300 hover:text-purple-600">Skills</Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={"/#projetos"} className="text-white transition-all duration-300 hover:text-purple-600">Projetos</Link>
              </motion.div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <motion.button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
              aria-label={"Menu de navegação"}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <RxCross2 size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -20 }}
            transition={{ duration: 0.5 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                exit={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? -20 : 0,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ display: isOpen ? "block" : "none" }}
              >
                <Link
                  href={"/#inicio"}
                  className="text-white block transition-all duration-300 hover:text-purple-600"
                >
                  Início
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -30,
                }}
                exit={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? -20 : 0,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{ display: isOpen ? "block" : "none" }}
              >
                <Link
                  href={"/#skills"}
                  className="text-white block transition-all duration-300 hover:text-purple-600"
                >
                  Skills
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -40,
                }}
                exit={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? -20 : 0,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                style={{ display: isOpen ? "block" : "none" }}
              >
                <Link
                  href={"/#projetos"}
                  className="text-white block transition-all duration-300 hover:text-purple-600"
                >
                  Projetos
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}