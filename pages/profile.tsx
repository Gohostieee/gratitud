import {useEffect, useState} from "react";
import {getUserData, SavedCreds} from "../scripts/userFuncs";
import Image from "next/image";
import logo from "../ASSETS/logo gratitud.png";
import {userProfile} from "../types/userdata";
import shareIcon from "../ASSETS/SHARE ICON.png"

export default function Profile() {
	const [userData, useUser] = useState<userProfile>({
		cash: 0.00,
		username: "loading...",
		creatorLink: "loading...",
		pfp: "https://firebasestorage.googleapis.com/v0/b/gratitud-a80e6.appspot.com/o/userprofiles%2F!default.png?alt=media&token=a5dffe76-ca3c-44fb-b7ce-5b14e072e156"
	})
	useEffect(() => {
		async function loginCheck() {
			if (!await SavedCreds()) {
				window.location.href = "/login.tsx"
			}
			const {username, password} = JSON.parse(String(localStorage.getItem("userdata") || ""))
			console.log(await getUserData({access: "root", username, password}))
		}

		loginCheck()
	}, [])

	function copyUrl() {
		
	}

	return (<div className={"h-[100%] absolute bg-white w-[100%]"}>
		<Image alt={"logo"} className={"m-16 mt-4"} src={logo.src} width={300} height={90}/>

		<div className={"w-[100%] flex flex-col text-center"}>

			<p className={"font-light text-primary text-xl"}>
				REGALOS RECIBIDOS
			</p>
			<p className={"font-bold text-gray-400 text-5xl"}>
				${userData.cash}
			</p>
			<Image src={userData.pfp} alt={"creator pfp"} className={"m-auto"} width={150} height={150}/>
			<div className={"flex justify-center"}>
				<p className={"font-bold text-primary text-lg m-4 mr-0"}>
					gratitud.link/
				</p>
				<p className={" text-primary text-lg m-4 ml-0	pl-1"}>

					{userData.creatorLink}
				</p>
				<div className={"flex flex-col justify-center"}>
				<button onClick={copyUrl}>
					<Image src={shareIcon} alt={"Share"} width={40} height={40} className={"w-[40px] h-[40px] "}/>
				</button>
				</div>
			</div>

		</div>
	</div>)


}