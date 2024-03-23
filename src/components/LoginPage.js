import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();

    const sendreq = async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            console.log(data);
            if (data.id && data.token) {
                localStorage.setItem("id", data.id);
                localStorage.setItem("token", data.token);
                // Route user to profile page upon successful login
                navigate('/profile');
            } else {
                throw new Error("Invalid credentials");
            }
        } catch (error) {
            alert(error.message);
            console.error('Error:', error);
        }
    }

    return (
      
        <div id="box">
            <h3>Welcome,Login Here!</h3>
            <form id="loginform">
                <label htmlFor="username">Username:-</label>
                <input id="username" type="text" name="username" required/>

                <label htmlFor="password">Password:-</label>
                <input id="password" type="password" name="password" required/>

                <button onClick={sendreq}>Login</button>
            </form>
        </div>
       
    )
}
