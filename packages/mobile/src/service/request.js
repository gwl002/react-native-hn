import axios from "./baseConfig.js";
import Cache from "./cache.js";

function checkStatus(response){

}

export async function request(url){
	if(Cache.has(url)){
		return Cache.get(url).data;
	}else{
		try{
			let response = await axios.get(url);
			Cache.set(url,response.data);
			return response.data;
		}catch(err){
			throw err;
		}
		
	}
	// try{
	// 	let response = await axios.get(url);
	// 	return response.data;
	// }catch(err){
	// 	throw err;
	// }
}

export function fetchItem(id){
	return request(`/item/${id}.json`);
}

export function fetchItems(ids){
	return Promise.all(ids.map(id => fetchItem(id) ));
}

export function fetchUser(id){
	return request(`/user/${id}.json`);
}

export function fetchIdsByType(type){
	return request(`/${type}stories.json`);
}