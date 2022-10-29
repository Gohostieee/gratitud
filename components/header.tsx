import logo from "../ASSETS/logo gratitud.png"
import Image from "next/image";
import hamburger from "../ASSETS/hamburguer.png"
import Link from "next/link";

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

    function Parse() {
        const array = []
        menuItems.forEach(x => {
            if (x[1] == url) {
                array.push(<div className={"m-auto mb-4 mt-4"}><button className={" text-3xl underline text-accent border-primary cursor-default"}>{x[0]}</button></div>)

            }
            else{
                array.push(<div className={"m-auto mb-4 mt-4"}><Link href={x[0]} ><button href = {x[1]} className={"softbtn text-3xl "}>{x[0]}</button></Link></div>)

            }

        })
        return array

    }

    return (
        <>
            <div className={"flex  h-[94px] shadow-lg lg:absolute fixed w-[100%] bg-neutral left-0"}>
                <div className={"lg:w-[20%] w-[100%] flex justify-end"}>
                    <Image alt={"logo"} className={"m-auto"} src={logo.src} width={300} height={90}/>
                    <div className="drawer lg:hidden inline-flx m-auto ">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                        <div className="drawer-content w-[100%] flex justify-end">
                            <label htmlFor="my-drawer"
                                   className=" cursor-pointer h-[24px] mr-4 drawer-button mt-9 relative"><Image
                                src={hamburger.src} width={32} height={32}/></label>
                        </div>
                        <div className="drawer-side border-t top-[90px] fixed left-0 h-[100vh] z-[50]">
                            <label htmlFor="my-drawer" className="drawer-overlay"></label>

                            <div className={"h-[100%] bg-neutral border-r-2 border-accent shadow-lg"}>
                                <ul className="menu p-4 overflow-y-auto w-80 text-base-content">
                                    {Parse()}

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


                <div className={"lg:inline-flex hidden sm:w-[50%] w-[60%] flex justify-end"}>
                    {Parse()}

                </div>
                <div className={"lg:inline-flex hidden flex w-[30%] justify-center"}>
                    <button
                        className={"hardbtn text-xl h-[44px] min-w-[144px] m-8 ml-8 mr-4 p-2 m-auto rounded-3xl"}>Crear
                        cuenta
                    </button>
                    <button
                        className={"hardbtn text-xl h-[44px] min-w-[144px] m-8 ml-8 mr-4 p-2 m-auto rounded-3xl"}>Ingresar
                    </button>

                </div>
                <div className={""}>


                </div>
            </div>

        </>
    )
}


export default Header