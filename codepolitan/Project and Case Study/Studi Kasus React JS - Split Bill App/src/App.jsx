import { useState } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import Friend from "./components/Friend";

const initialFriends = [
	{
		id: 118836,
		name: "Budi",
		image: "https://i.pravatar.cc/48?u=118836",
		balance: -7,
	},
	{
		id: 933372,
		name: "Sukma",
		image: "https://i.pravatar.cc/48?u=933372",
		balance: 20,
	},
	{
		id: 499476,
		name: "Parjo",
		image: "https://i.pravatar.cc/48?u=499476",
		balance: 0,
	},
];

function App() {
	const [friends, setFriends] = useState(initialFriends);
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [selectedFriend, setSelectedFriend] = useState(null);

	function handleShowAddFriend() {
		setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null)
	}
	function handleAddFriend(friend) {
		setFriends((friends) => [...friends, friend]);
	}
	function handleSeletectedFriend(friend) {
		setSelectedFriend((selected) =>
			selected?.id === friend.id ? null : friend,
		);
		setShowAddFriend(false);
	}

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value
          }
        }
        return friend;
      })
    )

    setSelectedFriend(null)
  }

	return (
		<>
					
			<div style={{
			    backgroundColor: 'white',
			    padding: '20px',
			    textAlign: 'center',
			    margin: '20px auto',
			    width: 'fit-content',
			    borderRadius: '8px',
			    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
			    fontSize: '16px'
			}}>
			    <span>
			        <a href="https://github.com/bayufadayan/study-repo/tree/main/codepolitan/Project%20and%20Case%20Study/Studi%20Kasus%20React%20JS%20-%20Split%20Bill%20App">
			            Link Repository
			        </a>
			    </span>
    			{" "} | <a href="https://github.com/bayufadayan/">@bayufadayan</a>
			</div>


			<h1 style={{
			 	textAlign: 'center',
			 	margin: '40px auto',
				 fontSize: '32px'}}>Split Bill App
			</h1>	

			<div className="app">
				<div className="sidebar">
					<FriendList friends={friends} onSelected={handleSeletectedFriend} selectedFriend={selectedFriend}/>
					{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
					<button
						type="button"
						className="button"
						onClick={handleShowAddFriend}
					>
						{showAddFriend ? "Tutup" : "Tambah Teman"}
					</button>
				</div>
				{selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
			</div>
		</>
	);
}

export default App;
