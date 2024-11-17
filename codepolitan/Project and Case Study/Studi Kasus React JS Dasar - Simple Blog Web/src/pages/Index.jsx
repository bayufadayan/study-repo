import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
	const [posts, setPosts] = useState(postsData);
	const [totalPosts, setTotalPosts] = useState(0);

	const onSearchChange = (value) => {
		const filteredPosts = postsData.filter((item) =>
			item.title.includes(value),
		);
		setPosts(filteredPosts);
		setTotalPosts(filteredPosts.length);
	};

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => setExternalPosts(json));
	}, []);

	return (
		<>
			<h1>Simple Blog</h1>

			<Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
			{posts.map((props, index) => (
				<Article {...props} key={index} />
			))}

			<br /><br />
			<div>
				<span>
					<a
						href="https://github.com/bayufadayan/study-repo/tree/main/codepolitan/Project%20and%20Case%20Study
	/Studi%20Kasus%20React%20JS%20Dasar%20-%20Simple%20Blog%20Web"
					>
						Link Repository
					</a>
				</span>{" "}
				| <a href="https://github.com/bayufadayan/">@bayufadayan</a>
			</div>
		</>
	);
}

export default Homepage;
