import React, { useEffect, useState } from 'react'
import supabase from '../helper/supabaseClient'
import { Navigate } from 'react-router-dom'

function Wrapper({ children }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // if a session is returned, stored in 'session' value below
        const getSession = async () => {
            const {
                data: { session }
            } = await supabase.auth.getSession();
            // returns boolean based on value of session
            // if session=null, !!null -> false; if session!=null, !!{} -> true
            setSession(session);
            setLoading(false);
        };

        getSession(); 
    },[]);

    if (loading) {
        return <div>Loading...</div>;
    } if (session) {
        // sends 'session' as a prop to Dashboard
       return React.cloneElement(children, { session });
    } 
    
    return <Navigate to="/login" />;
}

export default Wrapper;