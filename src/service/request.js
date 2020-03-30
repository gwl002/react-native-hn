import axios from "./baseConfig.js";
import api from "../api";

function checkStatus(response){

}

async function request(url){
	return axios.get(url).then(response => return response.data);
}

function fetchItem(id){
	let url = api.item(id);
	return request(url);
}


