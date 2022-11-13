import {requserdata, usrlocaldata} from "../types/userdata"
import axios from "axios";
import {response} from "../types/api";

export async function SavedCreds() {


	const {username, password}: usrlocaldata = JSON.parse(localStorage.getItem("userdata") || "fuap")
	if (username != undefined && password != undefined) {
		const {status, data} = (await axios({
			url: `/api/users/login?username=${username}&password=${password}`,
			method: "GET",
			data: {username: username, password: password}
		})).data
		switch (status) {
			case "passed":
				return true
			case "rejected":
				return false
		}
	} else {
		return false
	}
}

export async function getUserData({username,password,access}:requserdata):Promise<response>{
	if(access == undefined || username == undefined || password == undefined){
			return ({status:"rejected",data:"bad data"})
	}
	return(await axios({url:`/api/users/profile?username=${username}&password=${password}&access=${access}`,method:"GET"}))
}