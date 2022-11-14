import React from "react";

import Link from "next/link";

export default function Footer(){
    return(
    <footer className = {'mt-4 flex flex-col text-center justify-center bg-neutral relative pt-10 bottom-0'}>
        <span className = {'text-secondary text-3xl font-bold'}>Necesitas ayuda? <span className = {'text-primary text-3xl'}>hola@gratiud.link</span></span>
        <div className="divider w-[90%] m-auto mt-10 "></div>
        <div className = {'flex sm:flex-col md:flex-row gap-x-20 gap-y-10  justify-center mt-10 mb-20'}><Link href=''><h3 className = {' text-3xl font-bold'}>Inicio</h3></Link><Link href=''><h3 className = {' text-3xl font-bold'}>Blog</h3></Link><Link href=''><h3 className = {' text-3xl font-bold'}>Acerca</h3></Link><Link href=''><h3 className = {' text-3xl font-bold'}>Contacto</h3></Link></div> 
        <div className = {'flex md:flex-row  sm:flex-col justify-center gap-x-10 gap-y-10'}>
            <Link href = {"/signin"}>
                <button className={"rounded-full bg-primary lg:text-2xl min-w[100px] pt-1 pb-1 pl-5 pr-5 text-center text-white"}>Ingresar</button>
            </Link>
            <Link href = {"/signin"}>
                <button className={"rounded-full bg-primary lg:text-2xl min-w[100px] pt-1 pb-1 pl-5 pr-5 text-center text-white"}>Crear cuenta</button>
            </Link>
        </div>
    </footer>)
}