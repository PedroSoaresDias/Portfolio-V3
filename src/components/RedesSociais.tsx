"use client"

import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function RedesSociais() {
  return (
    <div className="flex my-1 gap-10">
        <motion.a
          href="https://www.linkedin.com/in/pedro-soares-dias/"
          target="_blanck"
          aria-label={"Link para o perfil do Linkedin"}
          className="border-2 border-blue-500 rounded-lg p-2"
          whileHover={{ scale: 1.2, borderRadius: "50%" }}
          whileTap={{ scale: 0.85, borderRadius: "50%" }}
          transition={{ duration: 0.2 }}
        >
          <FaLinkedin className="text-blue-500" size={25} />
        </motion.a>

        <motion.a
          href="https://github.com/PedroSoaresDias"
          target="_blanck"
          aria-label={"Link para o perfil do GitHub"}
          className="border-2 border-gray-100 rounded-lg p-2"
          whileHover={{ scale: 1.2, borderRadius: "50%" }}
          whileTap={{ scale: 0.85, borderRadius: "50%" }}
          transition={{ duration: 0.2 }}
        >
          <FaGithub className="text-gray-100" size={25} />
        </motion.a>
    </div>
  )
}