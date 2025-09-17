import React, { useState, useEffect } from 'react'
import supabase from '../helper/supabaseClient'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    useEffect(() => {
        document.title = "Sign Up"
    }, [])

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // will allow user to optionally display password
    const [showPassword, setShowPassword] = useState(false);
    // in case of error signing up, can explain issue to user
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevents automatic refresh
        setMessage(""); // empty any previous message

        // returns either data or error
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        // error handling
        if (error) {
            setMessage(error.message);
            return;
        } else {
            navigate("/login", { state: { signupMessage: "User account created successfully! Please log in using your credentials." } });
        }

        // reset to empty input boxes after account creation
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <h1>Sign Up</h1>
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
                    type={showPassword ? "text" : "password"} // type toggles 
                    placeholder="Password" 
                    required
                    style={showPassword ? { color: "grey" } : { color : "black" } }
                />
                <span className="pw-indicator" onClick={() => setShowPassword(!showPassword)}  >
                    {showPassword ? "Hide Password" : "Show Password"}
                </span>
                <button type="submit">Create Account</button>
            </form>

            <span>Already have an account? </span>
            <Link to="/login">Log In Here</Link>

            <hr />
            <Link to="/">Return to Home Page</Link>
        </div>
    );
}

export default Signup;