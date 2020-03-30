import axios from "./baseConfig.js";
import api from "../api";
import Cache from "./cache.js";

function checkStatus(response){

}

export async function request(url){
	if(Cache.has(url)){
		return Promise.resolve(Cache.get(url));
	}else{
		try{
			let response = await axios.get(url);
			Cache.set(url,response.data);
			return response.data;
		}catch(err){
			throw err;
		}
		
	}
	
}

export function fetchItem(id){
	return request("/item/" + id);
}


export function fetchUser(id){
	return request("/user/" + id);
}

export function fetchIdsByType(type){
	return request(`${type}/stories`);
}