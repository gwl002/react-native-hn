const TYPES = [ "top", "new", "show", "ask", "jobs"];

import { fetchIdsByType, fetchItem, fetchItems } from "../service/request";

const initialState = {
	activeType: "top",
	currentPage: 1,
	itemsById:{

	},
	itemsPerPage:20,
	list:{
		top:[],
		new:[],
		ask:[],
		show:[],
		job:[],
	}
}

export default {
	namespace: "item",
	state: initialState,
	reducers: {
		saveList(state, { payload }){
			const { ids, type } = payload;
			return { ...state, list : { ...state.list, [type] : ids } }
		},
		saveItems(state, { payload: itemsArr }){
			const items = itemsArr.reduce((_memo,item)=>{
				let memo = _memo;
				memo[item.id] = item;
				return memo;
			},{})
			return { ...state, itemsById: { ...state.itemsById, ...items } }
		},
		saveType(state, { payload: activeType }){
			return { ...state, activeType };
		},
		changePage(state, { payload: currentPage }){
			return { ...state, currentPage };
		}
	},
	effects: {
		*fetchList({ payload }, { put, call, select, all }){
			let { type, page } = payload;
			let ids = yield call(fetchIdsByType, type);
			let itemsPerPage = yield select(state => state.item.itemsPerPage);
			let activeIds = ids.slice(itemsPerPage * ( page - 1 ), itemsPerPage * page);
			let items = yield call(fetchItems,activeIds);
			yield put({ type: "saveList", payload: { ids, type } });
			yield put({ type: "saveItems", payload: items });
		},
		*fetchComments( { payload: id }, { put, call }){
			let item = yield call(fetchItem, id);
			yield put({ type:"saveItems", payload:[item] });

			let ids = item.kids;
			while(ids && ids.length){
				const items = yield all(ids.map( id => call(fetchItem,id)));
				yield put({ type: "saveItems", payload: items });
				ids = items.reduce((_memo, item) => {
					let memo = _memo;
					if(items.kids){
						memo = [...memo, ...item.kids];
					}
					return memo;
				},[])
			}
		}
	}
}