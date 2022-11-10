import {useEffect} from "react";
import {SavedCreds} from "../scripts/userAuth";
import Image from "next/image";
import logo from "../ASSETS/logo gratitud.png";


export default function Profile() {

	useEffect(() => {
		async function checkcreds() {
			if (!await SavedCreds()) {
				window.location.href = "/login.tsx"
			}

		}

		checkcreds()

	}, [])

	return (<div className={"h-[100%] absolute bg-white w-[100%]"}>
		<Image alt={"logo"} className={"m-16 mt-4"} src={logo.src} width={300} height={90}/>

	</div>)


}