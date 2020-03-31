import { create } from "dva-core";
import React from "react";
import {Provider} from "react-redux";
import App from "./App";
import UserModel from "./src/models/user";

const app = create();

app.model(UserModel);

app.start();

const store = app._store;

const DvaApp = () => <Provider store={store}>
	<App />
</Provider>

export default DvaApp;