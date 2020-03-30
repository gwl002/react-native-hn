class Cache{
	constructor(props) {
		this.init();
	}

	init(config){ 
		this.expireTime = config.expireTime || 1000 * 60 *10;
		this.size = config.size || 100;
		this.cache = new Map();
	}

	has(url){
		this.deleteExpiredItems();
		return this.cache.has(url);
	}

	get(url){
		return this.cache.get(url);
	}


	set(url,data){
		this.deleteExpiredItems();
		if(this.cache.size >= this.size){
			this.deleteLast();
		}
		//最多多少条item
		this.cache.set(url,{data:data,timestamp:Date.now()})
	}

	deleteLast(){
		let size = this.cache.size;
		let lastKey = this.cache.keys()[size-1];
		if(this.cache.has(lastKey)){
			this.cache.delete(lastKey);
		}
	}

	deleteExpiredItems(){
		this.cache.forEach((item,key)=>{
			if(this.hasExpired(item.timestamp)){
				this.cache.delete(key);
			}
		})
	}

	hasExpired(timestamp){
		return hasExpired(timestamp,this.expireTime);
	}
}

function hasExpired(timestamp,expireTime){
	if(Date.now() - timestamp > expireTime){
		return true;
	}else{
		return false;
	}
}