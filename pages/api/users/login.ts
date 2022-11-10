// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {firestore} from "../../../database/initfirebase"
import {userApiForm, usrlocaldata} from "../../../types/userdata";
import {response} from "../../../types/api";
import {collection, doc, getDoc, setDoc, query, where, getDocs} from "firebase/firestore";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<response>
) {
	switch (req.method) {
		case "POST":

			break;
		case "GET":
			// @ts-ignore
			const {username, password}: usrlocaldata = req.query
			console.log(username,password)

			if (username == undefined || password == undefined) {
				res.send({status: "rejected", data: "no data"})
				break
			}

			const q = query(collection(firestore, "users"), where("username", "==", username), where("password", "==", password))
			const user = await getDocs(q)
			if(user.empty){
				res.send({status:"rejected",data:"no user"})
			} else{
				res.send({status:"passed",data:"user found"})

			}
			break;
	}

}
