import { dataSkills } from "../app/api/dataSkills"
import Image from "next/image"

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-tr from-gray-800 to-black">
      <div className="py-6 px-4 text-center">
        <h2 className="my-4 text-xl font-bold text-white">Conhecimento em Tecnologias</h2>
        <span className="italic my-4 text-white font-normal">Escolhi essas tecnologias devido à minha experiência direta com elas, o que me permite desenvolver aplicações com maior confiança.</span>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 px-8 pb-8">
          {dataSkills && dataSkills.map(skill => (
            <div key={skill.id} className="border-2 border-white rounded-lg text-center shadow shadow-gray-500 p-3">
              <a href={skill.href} target="_blanck">
                <Image
                  src={skill.image}
                  width={100}
                  height={100}
                  alt={skill.alt}
                  className="mx-auto"
                />
                <h3 className="text-center font-semibold mt-2 text-white">{skill.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}