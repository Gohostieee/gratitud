// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {firestore,storage} from "../../../database/initfirebase"
import {requserdata, userApiForm} from "../../../types/userdata";
import {response} from "../../../types/api";
import { collection, doc, getDoc, setDoc,query, where,getDocs,limit } from "firebase/firestore";
import {ref,getDownloadURL} from "firebase/storage"
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<response>
) {
	let access,username,password,creatorLink,email
	switch(req.method){
		case "POST":
			// @ts-ignore
			username = req.body.username
			creatorLink = req.body.creatorLink
			password = req.body.password
			email = req.body.email

			if(username.length < 1){
				res.send({status:"rejected",data:"El usuario no puede estar vacio!"})
				break
			}
			if(!username.match(/^[a-zA-Z0-9]+$/)) {
				res.send({status:"rejected",data:"El usuario solo puede contener letras y numeros!"})
				break;
			}

			if(password.length<4){
				res.send({status:"rejected",data:"La contraseña es demasiado corta!"})
				break
			}
			if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
				res.send({status:"rejected",data:"El email insertado es invalido!"})
				break;
			}
			if(creatorLink.length<1){
				res.send({status:"rejected",data:"La link esta vacia!"})
				break
			}
			const docRef = doc(firestore, "users", creatorLink);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				res.send({status:"rejected",data:"El link que inserto ya esta ocupado!"})
				break
			}
			const q = query(collection(firestore, "users"), where("username", "==", username));
			const querySnapshot = await getDocs(q);
			if(!querySnapshot.empty){
				res.send({status:"rejected",data:"El nombre de usuario ya existe!"})
				break
			}
			await setDoc(docRef,{
				username:username,
				email:email,
				password:password,
				regalos:[],
				donations:0,
				donantes:[],
				bio:"",
				pfp:"!default.png"
			})
			res.send({status:"passed",data:""})
			break;
		case "GET":
			username = req.query["username"]
			access = req.query["access"]
			password = req.query["password"]
			if(access == undefined || username == undefined || password == undefined){
				res.send({status:"rejected",data:"bad data"})
				break;
			}
			switch(access){
				case "root":
					// it should never return more than 1 if there is no fuckups but just in case
					const q = query(collection(firestore, "users"), where("username", "==", username), where("password", "==", password), limit(1))
					const user = await getDocs(q)
					if(user.empty){
						res.send({status:"rejected",data:"no user"})
						break
					} else {
						const profile = user.docs[0].data()
						const pfpRef = profile["pfp"]
						profile["pfp"] = await getDownloadURL(ref(storage,`userprofiles/${pfpRef}`))
						res.send({status:"passed",data:profile})
					}
				case "guest":

			}
			break;
	}

}
