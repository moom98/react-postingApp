import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Logout({ setIsAuth }) {
	const Navigate = useNavigate();

	const logout = () => {
		// ポップアップウィンドウでログイン、signInWithPopupを使う
		signOut(auth).then(() => {
			// ローカルストレージからログイン情報を消去
			localStorage.clear();
			setIsAuth(false);
			// ログアウトしたらログインページに遷移する
			Navigate("/login");
		});
	};
	return (
		<div>
			<p>ログアウトする</p>
			<button onClick={logout}>ログアウト</button>
		</div>
	);
}

export default Logout;
