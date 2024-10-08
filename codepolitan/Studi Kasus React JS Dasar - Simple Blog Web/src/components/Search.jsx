import { useState } from "react";

function Search(props) {
	const [search, setSearch] = useState("");

    const onSearchChange = () => {
        props.onSearchChange(search);
    }
    

	const searchKeyDown = (e) => {
		if (e.key === "Enter") {
			onSearchChange();
		}
	}
	return (
		<>
			<div>
				Cari Artikel: <input onChange={(e) => {setSearch(e.target.value)}} onKeyDown={searchKeyDown}/>
				<button onClick={onSearchChange} type="button">Cari</button>
			</div>
			<small>Ditemukan {props.totalPosts} data dengan pencarian berdasarkan: {search}</small>
		</>
	);
}

export default Search;
