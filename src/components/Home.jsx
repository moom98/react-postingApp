import React, { useEffect, useState } from "react";
import "./Styles/Home.css";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Home = () => {
	const [postList, setPostList] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(collection(db, "posts"));

			// firebaseの中身を展開しながら持ってくる + documentIDを取得
			setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getPosts();
	}, []);

	const handleDelete = async (id) => {
		await deleteDoc(doc(db, "posts", id));
		window.location.href = "/";
	};

	return (
		<div className="home">
			{postList.map((post) => {
				return (
					<div className="postContents" key={post.id}>
						<div className="postHeader">
							<h1>{post.title}</h1>
						</div>
						<div className="postTextContainer">{post.content}</div>
						<div className="postFooter">
							<h3>@{post.author.username}</h3>
							{/* ログインしているユーザーと記事の投稿者が同じ場合にのみ削除ボタンを表示 */}
							{post.author.id === auth.currentUser?.uid && (
								<button
									onClick={() => {
										handleDelete(post.id);
									}}
								>
									Delete
								</button>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
