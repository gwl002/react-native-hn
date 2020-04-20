import { create } from "dva-core";
import React from "react";
import {Provider} from "react-redux";
import App from "./App";
import UserModel from "./models/user";
import ItemModel from "./models/item";
import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

const app = create({
	onAction: createLogger({})
});

app.model(UserModel);
app.model(ItemModel);

app.use(createLoading({}));

app.start();

const store = app._store;

console.warn(store.getState());


const DvaApp = () => <Provider store={store}>
	<App />
</Provider>

export default DvaApp;