import { dataProjects } from "../app/api/dataProjects";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projetos" className="bg-gradient-to-tr from-gray-800 to-black pt-10">
      <div className="py-6 px-4 text-center">
        <h2 className="my-4 text-2xl font-bold text-white">Projetos</h2>
        <span className="italic my-4 text-white font-normal">Realizei estes projetos para aprimorar minhas habilidades tecnológicas e também por iniciativa própria.</span>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 px-8 pb-8">
          {dataProjects && dataProjects.map(project => (
            <div key={project.id} className="card card-compact text-center shadow shadow-gray-500">
              <figure>
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={640}
                  height={360}
                />
              </figure>
              <div className="card-body text-center items-center">
                <h3 className="card-title text-white">{project.name}</h3>
                <div className="card-actions justify-center">
                  <a
                    href={project.url_project}
                    className="btn bg-blue-600 text-white text-xs md:text-sm lg:text-base font-medium p-2 transition-all duration-300 hover:bg-blue-800 transform-all"
                    target="_blanck"
                  >
                    Projeto
                  </a>
                  <a
                    href={project.url_repository}
                    className="btn bg-purple-600 text-white text-xs md:text-sm lg:text-base font-medium p-2  transition-all duration-300 hover:bg-purple-800 transform-all"
                    target="_blanck"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}