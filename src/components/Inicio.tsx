import Image from "next/image"

export default function Inicio() {
  return (
    <section id="inicio" className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-gray-800 to-black pt-14">
      <div className="container flex flex-col justify-center items-center gap-3 md:mx-6 lg:mx-9 text-white py-6 text-center">
        <Image src={"/images/foto-perfil.jpg"} alt="Foto do Pedro Dias" width={200} height={200} className="rounded-full" />
        <h1 className="container sm:text-xl text-base font-bold p-2">
          Olá, eu sou
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 to-purple-500"> Pedro Dias</span>
        </h1>
        <p className="container text-justify sm:text-lg text-sm font-semibold px-9">Como desenvolvedor web, meu objetivo é criar aplicações que atendam aos padrões de qualidade e desempenho, sejam intuitivas e acessíveis em qualquer dispositivo. A integração de sistemas é fundamental em meus projetos, garantindo uma excelente experiência de usuário e uma comunicação perfeita entre sistemas.</p>
      </div>
    </section>
  )
}