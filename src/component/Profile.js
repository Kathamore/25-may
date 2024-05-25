import { useEffect, useState } from "react";

const Profile = ()=>{

const [user, setUser] = useState(null)

useEffect(()=>{
    const fetchUserProfile = async()=>{
        const userId = localStorage.getItem('userId');
    if(!userId){
            return;
    }
    
    try{
        const response = await fetch("https://dummyjson.com/users/${id}");
        const data = await response.json();
        setUser(data);
    }catch(err){
        console.error('Error');
    }
};

fetchUserProfile();

}, [])

if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      {/* Display other user details as needed */}
    </div>
  );
};


export default Profile;