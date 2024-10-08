import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import CSS here
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<ToastContainer autoClose={1000} />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
