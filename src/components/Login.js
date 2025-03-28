import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('PLACE ENDPOINT HERE');
            const users = await response.json();
            const validUser = users.find(user => 
                user.username === username && user.email === password
            );

            if (validUser) {
                setMessage('Login successful! Redirecting...');
                setTimeout(() => navigate('REDIRECT TO'), 2000);
            } else {
                setMessage('Invalid username or password!');
            }
        } catch (error) {
            setMessage('Failed to fetch user data!');
        }
    };

    return (
        <main>
        <form onSubmit={handleLogin} className="login-form">
            <h1>Login</h1>  
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                className="login-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
            />
            
            <br></br>
            
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
            />

            <br></br>

            <button type="submit" className="main-button">Login</button>
            </form>
        <message>
        {message && <div style={{margin: '20px', padding: '10px'}}>{message}</div>}
        </message>
    </main>
    );
}

export default Login;