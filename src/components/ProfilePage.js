import React from "react";
import  { useEffect, useState } from "react";

export const ProfilePage=()=>{
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch id from local storage
        const id = localStorage.getItem("id");

        // Fetch user data using the id
        fetch(`https://dummyjson.com/users/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                return response.json();
            })
            .then(data => {
                // Set the fetched user data to state
                setUserData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []); // Empty dependency array to ensure useEffect runs only once on component mount

    return (
        <div id="profile">
            
            <h2>Welcome to Profile Page!</h2>
            {userData ? (
                <div>
                    <p>ID: {userData.id}</p>
                    <p>Name: {userData.firstName} {userData.lastName}</p>
                    <p>UserName:{userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <p>Gender: {userData.gender}</p>
                    <img width={200} src={userData.image} alt="img" />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
   
   
   
   
   
   
   
}