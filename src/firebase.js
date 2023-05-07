import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDwjLz8W909hZhRVaN6TLrU6egqz-hKzkI",
	authDomain: "react-blog-447cc.firebaseapp.com",
	projectId: "react-blog-447cc",
	storageBucket: "react-blog-447cc.appspot.com",
	messagingSenderId: "631071891715",
	appId: "1:631071891715:web:fbe88ea9aa329f66080936",
	measurementId: "G-ZYRNF32PL5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// 認証の初期化
const auth = getAuth(app);
// インスタンス化
const provider = new GoogleAuthProvider();
// データベースの初期化
const db = getFirestore(app);

export { auth, provider, db };
