// inicio 22:00
"use client";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoDefault from "@/public/alarado-icon-homepage.svg";
import LogoDark from "@/public/alarado-icon-homepage-dark.svg";
import Sol from "@/public/Sun_fill.svg";
import LunaDefault from "@/public/Moon_fill_light.svg";

const variants = {
    open: { opacity: 1, x: 0 },
}
interface NavBarProps {
    // Definir las props y sus tipos aquí
    hijos: ReactNode; // Ejemplo de una prop children de tipo ReactNode
  }

export default function NavBar(props: NavBarProps) {

    const contenido = props.hijos;
    const [ mostrarMenu, setMostrarMenu ] = useState(true);
    const [ dark, setDark ] = useState(true);

    const activarMenu = ()=>{
        mostrarMenu ? setMostrarMenu(false) : setMostrarMenu(true);
    }

    const activarDark = ()=>{
        dark ? setDark(false) : setDark(true);
    }

    const defaultBack = "bg-slate-100 text-slate-800";
    const darkBack = "bg-slate-900 text-white";

    return(
        <div>

        <motion.div  className={`w-full h-24 flex justify-between items-center pt-3 px-4 md:px-20 fixed ${dark ? defaultBack : darkBack}`} >
            <div className="md:scale-150 hover:cursor-pointer">
                {
                    dark ?
                    <Image src={LogoDefault} width={130} height={60} alt="Logo Default" />
                    :
                    <Image src={LogoDark} width={130} height={60} alt="Logo Dark" />
                }
            </div>

            <div className="hidden md:flex md:space-x-4 mt-2 md:text-sm lg:text-lg lg:space-x-12 font-bold">
                <p className="hover:cursor-pointer">Sobre Nosotros</p>
                <p className="text-slate-500 hover:cursor-pointer">Productos</p>
                <p className="text-slate-500 hover:cursor-pointer">Recursos</p>
                <p className="text-slate-500 hover:cursor-pointer">Contacto</p>
            </div>
            <div>
                {/* switch light */}

                {
                    dark ?
                    <motion.button layout onClick={activarDark}>
                            <div className="w-32 md:w-full flex justify-end md:p-0 mt-2 mr-4 md:mr-0">        
                                <motion.div className="px-1 py-1 rounded-full bg-slate-800 flex" layout>
                                    <Image src={LunaDefault} alt="Sol" width={25} height={25} />
                                    <Image src={Sol}  className="bg-slate-100 rounded-full p-0.5" alt="Sol" width={25} height={25} />
                                </motion.div>
                            </div>
                        </motion.button>
                    :
                    <motion.button layout onClick={activarDark}>
                            <div className="w-32 md:w-full flex justify-end md:p-0 mt-2 mr-4 md:mr-0">        
                                <motion.div className="px-1 py-1 rounded-full bg-slate-100 flex" layout>
                                    <Image src={LunaDefault} className="bg-slate-800 rounded-full p-0.5" alt="Sol" width={25} height={25} />
                                    <Image src={Sol}   alt="Sol" width={25} height={25} />
                                </motion.div>
                            </div>
                    </motion.button>
                }

            </div>
            <motion.div className="block md:hidden">
                {
                    mostrarMenu ?
                    <motion.button 
                    animate={{
                        scale: [1, 1.3, 1, 1],
                            rotate: [90, 0, 270, 90],
                            borderRadius: ["20%", "20%", "20%", "20%"],
                        }} onClick={activarMenu} className="rotate-90 text-2xl mr-5">|||</motion.button>
                        :
                        <motion.div 
                        
                        animate={{ x: [100,0] }}
                        transition={{ ease: "easeOut", duration: 0.4 }}
                        
                        className={`fixed top-0 right-0 w-[70vw] h-screen shadow-lg
                            ${dark ? defaultBack : "bg-slate-800 shadow-lg shadow-slate-700" }`}>
                            <div className="px-10 pt-4 flex justify-between">
                                <p></p>
                                <motion.button animate={{
                                    scale: [1, 1.3, 1, 1],
                                    rotate: [90, 0, 270, 90],
                                    borderRadius: ["20%", "20%", "20%", "20%", "20%"],
                                }} onClick={activarMenu} className="rotate-90 text-2xl mt-5">|||</motion.button>
                            </div> 
                            <div className="px-10 space-y-6 mt-4">
                                <p className="h-10  text-lg font-bold hover:cursor-pointer hover:bg-neutral-200 p-2 rounded-md hover:text-neutral-700">Sobre Nosotros</p>
                                <p className="h-10 hover:bg-neutral-200 p-2 rounded-md hover:cursor-pointer hover:text-neutral-700">Productos</p>
                                <p className="h-10 hover:bg-neutral-200 p-2 rounded-md hover:cursor-pointer hover:text-neutral-700">Recursos</p>
                                <p className="h-10 hover:bg-neutral-200 p-2 rounded-md hover:cursor-pointer hover:text-neutral-700">Contaco</p>
                            </div>
                        </motion.div>
                }
            </motion.div>
        </motion.div>
        <div className={`w-full h-full ${dark ? defaultBack : darkBack}`}>
            {contenido}
        </div>
    </div>
    )
}