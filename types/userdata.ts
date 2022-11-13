import {util} from "protobufjs";
import float = util.float;

export interface userApiForm {
	creatorLink: string,
	username: string,
	password: string,
	email: string,


}
export interface userProfile{
	username:string,
	creatorLink:string,
	cash:number,
	pfp:string
}
export interface usrlocaldata {
	username: string,
	password: string
}

export interface requserdata {
	access: "root" | "guest",
	username:string,
	password:string | null
}