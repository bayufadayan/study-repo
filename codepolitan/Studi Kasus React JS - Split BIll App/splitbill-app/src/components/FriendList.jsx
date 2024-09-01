import Friend from "./Friend";

function FriendList({friends, onSelected, selectedFriend}) {
    
    return (
        <>
            <ul>
                {
                    friends.map((friend) => (
                        <Friend friend = {friend} key={friend.id} onSelected={onSelected} selectedFriend={selectedFriend}/>
                    ))
                }
            </ul>
        </>
    )
}

export default FriendList;