import heart from "../ASSETS/HEART ICON.png"
import Image from "next/image";
import Link from "next/link";
export default function Home() {
    interface influencerData {
        amount:string,
        name:string,
        occupation:string,
        src:string,
        href:string
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
    return (
            <main className={"m-auto"}>
                <div className={"flex m-auto top-[94px] relative flex-col justify-center text-center"}>
                    <p className={"text-3xl h-[32px] text-primary text-center inline-flex m-auto  mt-24"}>Crea una cuenta con tu <p className={"text-3xl font-bold underline ml-1 mr-1"}> URL </p> personalizado <p className={"text-3xl font-bold underline ml-1 align-text-top"}>gratis</p></p>
                </div>
            </main>

    )
}
