import React from 'react'
import { Link } from 'react-router-dom'

function Home() {    
    return (
        <div>
            <h2>Welcome to Your</h2>
            <h1>Notes</h1>
            <h2>Companion</h2>
            <br/>
            <hr/>
            <span>Been here before?</span>
            <Link to="/login">Login</Link>
            <br/>
            <br/>
            <span>Don't have an account?</span>
            <Link to="/signup">Sign Up Here</Link>
        </div>
    );
}

export default Home;