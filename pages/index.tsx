import isp from "../ASSETS/isorrowproductions.jpg"
import img2 from "../ASSETS/danielacorrea.png"
import heart from "../ASSETS/HEART ICON.png"
import Image from "next/image";
import Link from "next/link";
import { Router } from 'next/router';
export default function Home() {
    interface influencerData {
        amount:string,
        name:string,
        occupation:string,
        src:string,
        href:string
    }
    interface creatorData {
        src:string, name:string, occupation:string
    }
    function parseCard ({amount,name,occupation,src,href}:influencerData) {

        return (
            <div id="item1" className="carousel-item w-full min-h-[400px] justify-center flex flex-col mb-4 ">
                <div className={"w-[150px] h-[90px] mb-4 border-accent border-2 rounded-lg bg-neutral m-auto"}>

                    <Image src={heart.src} alt={"hear"} width={32} height={32} className={"m-auto mt-4"}/>
                    <p className={"text-accent text-center text-3xl font-light"}>{amount}</p>

                </div>
                <Image alt = {name} width={240} height={200} src={src} className="w-full h-[200px] m-auto object-none mask mask-circle"/>
                <div>
                    <p className={"text-primary text-center text-3xl "}>{name}</p>
                    <div className="divider w-[50%] m-auto"></div>
                    <p className={"text-primary text-center"}>{occupation}</p>
                </div>
                <Link href={href} className={"m-auto"}><button className={"w-[122px] h-[42px] text-accent rounded-3xl mt-4 text-lg  m-auto bg-neutral border-accent border-2"}>Gratitud</button></Link>
            </div>
        )
    }
    function CreatorsCards ({src, name, occupation}: creatorData) { 
        
        return(
        <div className = {'w-full h-full p-3'}>
            <Image alt = {name} width={240} height={200} src={src} className="w-full h-[200px] m-auto object-none mask mask-circle rounded-full"/>
            <h2 className={"text-primary text-xl text-center w-[75%] m-auto font-mono font-bold pt-3"}>{name}</h2>
            <h5 className={"text-primary text-sm text-center w-[75%] m-auto font-mono pt-3"}>{occupation}</h5>
        </div>);
        
    }

    return (
            <main className={"flex flex-col m-auto"}>
                <div className={"lg:w-[1300px] flex lg:flex-row flex-col relative top-[128px] m-auto"}>
                    <div className={"flex flex-col lg:w-[900px] w-[380px] lg:mr-64 lg:mt-24 lg:pr-8 m-auto lg:border-r"}>
                        <h1 className={"text-primary lg:text-4xl text-3xl lg:text-left text-center lg:ml-24 font-bold "}>Recibe y gestiona el cariño de tus seguidores para seguir creando y contribuyendo al mundo</h1>
                        <p className={"text-primary lg:text-2xl lg:mt-8 text-lg text-center lg:ml-24 font-mono "}>"La gratitud es uno de los sentimientos mas poderosos que puedes experimentar, y compartirlo es un privilegio
                             que llenal el alma de alegria en quien lo da y en quien lo recibe" </p>

                    </div>
                    <div className={"divider lg:hidden mt-12"}/>
                    <div className={"w-[320px] lg:w-[600px] m-auto lg:mt-0 mt-12 bg-accent bg-opacity-10 border-2 p-8 lg:min-h-[600px] flex flex-col justify-center rounded-xl border-accent"}>
                        <div className={""}>
                            <div className="carousel w-full m-auto ">
                                {parseCard({amount:"719k", name:"ISorrowProductions",occupation:"Professional Goblin", src:isp.src, href:"/"})}
                                <div id="item2" className="carousel-item w-full">
                                    <img src="https://placeimg.com/800/200/arch" className="w-full"/>
                                </div>
                                <div id="item3" className="carousel-item w-full">
                                    <img src="https://placeimg.com/800/200/arch" className="w-full"/>
                                </div>
                                <div id="item4" className="carousel-item w-full">
                                    <img src="https://placeimg.com/800/200/arch" className="w-full"/>
                                </div>
                            </div>
                            <div className="flex justify-center w-full py-2 gap-2">
                                <a href="#item1" className="btn btn-xs">1</a>
                                <a href="#item2" className="btn btn-xs">2</a>
                                <a href="#item3" className="btn btn-xs">3</a>
                                <a href="#item4" className="btn btn-xs">4</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={"relative top-[128px] h-screen flex flex-col justify-center items-center bg-secondary mt-10"}>
                    <div className={"text-center lg:max-w-[50%]"}>                        
                        <h1 className={"text-primary lg:text-4xl text-3xl text-center"}>?Que puedes hacer con tu <span className={'font-bold'}>link de gratitud?</span></h1>
                        <p className={"text-primary lg:text-2xl lg:mt-8 text-lg text-center"}>"La gratitud es uno de los sentimientos mas poderosos que puedes experimentar, y compartirlo es un privilegio
                             que llenal el alma de alegria en quien lo da y en quien lo recibe" </p>
                        <p className={"text-primary lg:text-2xl lg:mt-8 text-lg text-center"}>"La gratitud es uno de los sentimientos mas poderosos que puedes experimentar, y compartirlo es un privilegio
                             que llenal el alma de alegria en quien lo da y en quien lo recibe" </p>
                        <Link href = {"/"}>
                            <button className={"rounded-full bg-accent text-secondary lg:text-2xl min-w[100px] lg:p-5 p-2 text-center font-bold font-mono mt-10 m-auto"}>Crear una cuenta</button>
                        </Link>
                    </div>
                </div>
                <div className={"h-screen flex flex-col md:flex-row sm:flex-row relative top-[128px] m-auto bg-white "}>
                    <div className={"flex flex-col lg:w-[900px] w-[380px] lg:mr-64 lg:mt-24 lg:pr-8 m-auto"}>                        
                        <h1 className={"text-primary lg:text-4xl text-3xl lg:text-left text-center lg:ml-24 mb-12"}>¿Que puedes hacer con tu <span className={'font-bold'}>link de gratitud</span>?</h1>
                        <p className={"text-primary lg:text-2xl lg:mt-8 text-lg text-center lg:ml-24 "}>Comparte tu link de gratitud a tus seguidores, alumnos, pacientes, etc. y comienza a recibir testimonios por tu labor, así como donaciones en amor. Selecciona los destacados para que se muestren en tu perfil.</p>
                        <p className={"text-primary lg:text-2xl lg:mt-8 text-lg text-center lg:ml-24 "}>Aumenta la reputación de tu trabajo y acelera el crecimiento de lo que más amas hacer.</p>
                        <Link href = {"/signin"}>
                            <button className={"rounded-full bg-accent text-secondary lg:text-2xl min-w[100px] lg:p-5 p-2 text-center font-bold font-mono mt-10"}>Crear una cuenta</button>
                        </Link>
                    </div>
                    <div className = {'flex flex-col max-w-sm'}>
                        <img src="https://media.discordapp.net/attachments/1031728423384662118/1038919449966821428/person1.jpg" className="w-full"/>
                    </div>
                </div>
                <div className = {' mt-4 bg-neutral relative pt-10'}>
                    <h1 className={"text-primary lg:text-4xl text-3xl text-center"}>Conoce a otros <span className = {'text-primary lg:text-4xl text-3xl text-center font-bold'}>creadores como tú</span></h1>
                    <div className={"grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-y-5 gap-x-5 p-10 "}>
                        <CreatorsCards name = 'Daniela Correa' src = {img2.src} occupation = 'Facilitadora de Conciencia'/>
                        <CreatorsCards name = 'Daniela Correa' src = {img2.src} occupation = 'Facilitadora de Conciencia'/>
                        <CreatorsCards name = 'Daniela Correa' src = {img2.src} occupation = 'Facilitadora de Conciencia'/>
                        <CreatorsCards name = 'Daniela Correa' src = {img2.src} occupation = 'Facilitadora de Conciencia'/>
                        <CreatorsCards name = 'Daniela Correa' src = {img2.src} occupation = 'Facilitadora de Conciencia'/>
                        <CreatorsCards name = 'Daniela Correa' src = {img2.src} occupation = 'Facilitadora de Conciencia'/>
                        <CreatorsCards name = 'Daniela Correa' src = {img2.src} occupation = 'Facilitadora de Conciencia'/>
                        <CreatorsCards name = 'Daniela Correa' src = {img2.src} occupation = 'Facilitadora de Conciencia'/>
                    </div>
                </div>
            </main>
    )
}
