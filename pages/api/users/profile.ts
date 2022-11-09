// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {firestore} from "../../../database/initfirebase"
import {userApiForm} from "../../../types/userdata";
import {response} from "../../../types/api";
import { collection, doc, getDoc, setDoc,query, where,getDocs } from "firebase/firestore";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<response>
) {
	switch(req.method){
		case "POST":
			const {username,creatorLink,password,email}:userApiForm = req.body
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
				bio:""
			})
			res.send({status:"passed",data:""})
			break;
		case "GET":
			break;
	}

}
