import Image from "next/image";
import LogoMain from "@/public/hero-image-simple-homepage.png";

export default function Home() {
  return (
    <main className="h-full lg:w-screen">
    <div className="flex flex-col-reverse h-fit lg:flex lg:flex-row min-h-full px-5 lg:px-40 lg:justify-between lg:items-center">
      <div className="w-full lg:w-[35vw] space-y-10 lg:mt-20">
        <p className="font-bold text-md lg:text-lg">😎 Una forma simple de comunicarse</p>
        <h2 className="text-4xl lg:text-7xl font-bold leading-relaxed lg:leading-tight ">Acciones para la accesibilidad en el diseño</h2>
        <p className="text-md lg:text-lg font-medium ">La forma más rápida de construir e implementar sitios web con componentes reutilizables</p>
        <div className="space-x-6 lg:space-x-20">
          <button className="px-4 lg:px-10 py-3 text-md lg:text-lg rounded-xl bg-sky-700 text-white font-medium">Comenzar</button>
          <button className="text-md lg:text-lg border-b-4 border-sky-700 hover:bg-sky-500
            px-4 lg:px-10 py-3 rounded-md hover:text-white mb-32 lg:mb-0">Demo en vivo</button>
        </div>
        <br />
      </div>
      <div className="mb-30">
        <Image src={LogoMain} alt="logo del main" width={700} height={700} 
          className="mt-44 mb-36 lg:mt-0 lg:mb-0"/>
      </div>
    </div>
  </main>
  );
}
