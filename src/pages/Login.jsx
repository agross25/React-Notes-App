import React, { useState, useEffect } from 'react';
import supabase from '../helper/supabaseClient'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    useEffect(() => {
        document.title = "Login"
      }, [])

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // in case of error logging in, can explain issue to user
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevents automatic refresh
        setMessage(""); // empty any previous message

        // returns either data or error
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        // error handling
        if (error) {
            setMessage(error.message);
            // reset inputs to empty after unsuccessful login attempt
            setEmail("");
            setPassword("");
            return;
        } else {
            navigate("/dashboard");
            return null;
        }
    }

    return (
        <div>
            <h1>Log In</h1>
            <br/>
            <hr/>
            {/* Displays message if there is a message */}
            {message && <span>{message}</span>}
            
            <form onSubmit={ handleSubmit } >
                <input 
                // keep variable updated to changes and bind new value
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email" 
                placeholder="Email" 
                required
                />
                <input
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
                type="password" 
                placeholder="Password" 
                required
                />
                <br/>
                <button type="submit">Log In</button>
            </form>

            <span>Don't yet have an account? </span>
            <Link to="/signup">Sign Up Here</Link>

            <hr />
            <Link to="/">Return to Home Page</Link>
        </div>
    );
}

export default Login;