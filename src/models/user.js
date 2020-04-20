const initialState = {

}
import { fetchUser } from "../service/request";

export default {
	namespace: "user",
	state: initialState,
	reducers: {
		setUser(state , { payload }){
			return {
				...state,
				[payload.id]:payload.user
			}
		}
	},
	effects:{
		*fetchUser({ payload }, { put, call } ){
			let { id } = payload;
			let user = yield call(fetchUser,id)
			yield put({ type: "setUser", payload: { id: id, user: user} })
		}
	}
}