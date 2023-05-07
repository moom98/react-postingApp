import React, { useEffect } from "react";
import "./Styles/CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost(isAuth) {
	const [title, setTitle] = React.useState("");
	const [content, setContent] = React.useState("");

	const navigate = useNavigate();

	const createPost = async () => {
		// firebaseからデータを取得
		await addDoc(collection(db, "posts"), {
			title: title,
			content: content,
			author: {
				username: auth.currentUser.displayName,
				id: auth.currentUser.uid,
			},
		});

		navigate("/");
	};

	useEffect(() => {
		if (!isAuth) {
			navigate("/login");
		}
	}, []);

	return (
		<div className="createPostPage">
			<div className="postContainer">
				<h1>記事を投稿する</h1>
				<div className="inputPost">
					<div className="">タイトル</div>
					<input
						type="text"
						placeholder="タイトルを入力"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="inputPost">
					<div className="">投稿</div>
					<textarea
						placeholder="投稿内容を入力"
						onChange={(e) => setContent(e.target.value)}
					></textarea>
				</div>
				<button onClick={createPost}>投稿する</button>
			</div>
		</div>
	);
}

export default CreatePost;
