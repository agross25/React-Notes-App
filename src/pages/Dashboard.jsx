import React, { useState, useEffect } from 'react'
import supabase from '../helper/supabaseClient'
import { useNavigate } from 'react-router-dom'

function Dashboard({ session }) {
    useEffect(() => {
        document.title = "Dashboard"
    }, [])

    const user = session?.user;
    const navigate = useNavigate();
    const [note, setNote] = useState("")
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("");

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/");
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevents automatic refresh
        setMessage(""); // empty any previous message
        // POST:
        const { data, error } = await supabase.from("notes")
            .insert([{user_id: user.id, content: note}])
        
        // error handling
        if (error) {
            setMessage(error.message);
            return;
        } else {
            setMessage("Note submitted successfully!");
            setNote(""); // empty text
        }
    }

    const displayAll = async (event) => {
        event.preventDefault(); // prevents automatic refresh
        setMessage(""); // empty any previous message
        setLoading(true);
        // GET:
        const { data, error } = await supabase.from("notes").select("*")
            .order("created_at", { ascending: false });
        // error handling
        if (error) {
            setMessage(error.message);
            return;
        } else {
            setNotes(data);
        }
        setLoading(false);
    }

    return (
     <div>
        {/* Logout button top right */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={signOut}>Log Out</button>
        </div>
        <br/>
        <br/>
        <h1>Welcome back!</h1>
        <hr/>
        {/* Displays message if there is a message */}
        {message && <span>{message}</span>}
        <form onSubmit={handleSubmit}>
            <textarea 
                onChange={(e) => setNote(e.target.value)}
                value={note}
                rows="4" 
                cols="35" 
                placeholder="New Note" 
            />
            <br />
            <button type="submit">Submit New Note</button>
        </form>
        <hr />
        <button onClick={displayAll}>Display My Notes</button>
        {loading ? (
            <p>Loading Notes . . .</p>
        ) : (
            <ul>
                {notes.map((n) => (
                    <li key={n.id}>
                        <strong>{new Date(n.created_at).toLocaleString([], { year: 'numeric', month: 'short', day: 'numeric'})}:</strong> {n.content}
                    </li>
                ))}
            </ul>
        )}
     </div>
    );
}

export default Dashboard;