import logo from "../ASSETS/logo gratitud.png"
import Image from "next/image";
import hamburger from "../ASSETS/hamburguer.png"
import Link from "next/link";
import {useState} from "react";
import {JSXElement} from "@typescript-eslint/types/dist/generated/ast-spec";

interface data {
    url: string
}

const Header = ({url}: data) => {
    /*
    const [width, useWidth] = useState<number>(1200)
    const [windowState, useWindow] = useState<any>(null)
    useEffect(function SetWidthg() {
        // detect window screen width function
        useWidth(windowState?.innerWidth)
    }, [windowState])
    useEffect(function SetWindow(){
        let tempWindow = null
        if (typeof window !== 'undefined') {
            tempWindow = window

        }
        useWindow(tempWindow)
    })*/
    const menuItems = [
        ["Inicio", "/"],
        ["Acerca", "/about"],
        ["Blog", "/blog"],
        ["Contacto", "/contact"],
    ]
    const [shadow, useShadow] = useState<boolean>(false),[left,useLeft]=useState("-100%")

    function Parse() {
        const array:JSX.Element[] = []
        menuItems.forEach(x => {
            if (x[1] == url) {
                array.push(<div className={"m-auto mb-4 mt-4"}>
                    <button className={" text-3xl underline text-accent cursor-default"}>{x[0]}</button>
                </div>)

            } else {
                array.push(<div className={"m-auto mb-4 mt-4"}><Link href={x[0]}>
                    <button  className={"softbtn text-3xl "}>{x[0]}</button>
                </Link></div>)

            }

        })
        return array

    }

    return (
        <>
            <div className={"flex  h-[94px] shadow-lg lg:absolute fixed w-[100%] z-[150] bg-neutral left-0"}>
                <div className={"lg:w-[20%] w-[100%] flex justify-end"}>
                    <Image alt={"logo"} className={"m-auto"} src={logo.src} width={300} height={90}/>
                    <div className="drawer max-h-[100%] lg:hidden inline-flx m-auto ">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                        <div className="drawer-content z-[-1] flex justify-end">
                            <label onClick={function () {
                                let tempShadow;
                                let left
                                switch (shadow) {
                                    case false:
                                        tempShadow = true
                                        left = "0"
                                        break;
                                    case true:
                                        tempShadow = false
                                        left = "-100%"
                                        break;

                                }
                                useLeft(left)
                                useShadow(tempShadow)
                            }} htmlFor="my-drawer"
                                   className=" cursor-pointer h-[24px] mr-4 drawer-button mt-9 relative"><Image
                                src={hamburger.src} alt={"hamburger menu"} width={32} height={32}/></label>
                        </div>
                        <div  className={`drawer-side top-[94px] transition-all cursor-none absolute left-[${left}] h-[100vh] z-[-50]`}>
                            <label htmlFor="my-drawer" className="drawer-overlay"></label>
                            <div className={"h-[100%] bg-neutral border-r-2 border-accent shadow-lg"}>
                                <ul className="menu p-4 overflow-y-auto w-80 text-base-content">
                                    {Parse()}
                                    <div className={"m-auto"}>

                                        <Link href={"/signup"}>

                                            <button
                                                className={"hardbtn text-xl h-[44px] min-w-[144px] m-8 ml-8 mr-4 p-2 m-auto rounded-3xl"}>Crear
                                                cuenta
                                            </button>

                                        </Link>
                                    </div>
                                    <div className={"m-auto"}>

                                        <Link href={"/signin"}>

                                            <button
                                                className={"hardbtn text-xl h-[44px] min-w-[144px] m-8 ml-8 mr-4 p-2 m-auto rounded-3xl"}>Ingresar
                                            </button>
                                        </Link>
                                    </div>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>


                <div className={"lg:inline-flex hidden sm:w-[50%] w-[60%] flex mt-4 justify-end"}>
                    {Parse()}

                </div>
                <div className={"lg:inline-flex hidden flex w-[30%] justify-center"}>
                    <div>

                        <Link href={"/signup"}>

                            <button
                                className={"hardbtn text-xl h-[44px] min-w-[144px] m-8 ml-8 mr-4 p-2 m-auto rounded-3xl"}>Crear
                                cuenta
                            </button>

                        </Link>
                    </div>
                    <div>

                        <Link href={"/signin"}>

                            <button
                                className={"hardbtn text-xl h-[44px] min-w-[144px] m-8 ml-8 mr-4 p-2 m-auto rounded-3xl"}>Ingresar
                            </button>
                        </Link>
                    </div>

                </div>

                <div className={""}>


                </div>
            </div>
            {
                shadow && <div className={"fixed left-0 top-0 w-[100vw] h-[100vh] z-[100] bg-accent bg-opacity-40"}/>
            }
        </>
    )
}


export default Header