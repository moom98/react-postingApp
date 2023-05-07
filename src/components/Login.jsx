import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
	const Navigate = useNavigate();

	const loginInWithGoogle = () => {
		// ポップアップウィンドウでログイン、signInWithPopupを使う
		signInWithPopup(auth, provider).then((result) => {
			// ローカルストレージにログインしたことを保存
			localStorage.setItem("isAuth", true);
			setIsAuth(true);
			// ログインしたらルートディレクトリに遷移する
			Navigate("/");
		});
	};
	return (
		<div>
			<p>ログインしてはじめる</p>
			<button onClick={loginInWithGoogle}>Goggleでログイン</button>
		</div>
	);
}

export default Login;
