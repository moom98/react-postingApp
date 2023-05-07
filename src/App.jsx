import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

function App() {
	// ログイン状態をlocalStorageから取得
	const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

	return (
		<Router>
			<Navbar isAuth={isAuth} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/createpost" element={<CreatePost />} isAuth={isAuth} />
				<Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
				<Route path="/logout" element={<Logout setIsAuth={setIsAuth} />} />
			</Routes>
		</Router>
	);
}

export default App;
