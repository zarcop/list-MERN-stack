import NavBar from "../components/Navbar.jsx"
import { useState } from "react";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import NoteCard from "../components/NoteCard.jsx";
import {useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";

const HomePage = () => {
    const[isRateLimited, setIsRateLimited] = useState(false);
    const[notes,setNotes] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async() => {
            try{
                const res = await axios.get('http://localhost:5001/api/notes');
                setNotes(res.data)
                setIsRateLimited(false);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching the data");
                if (error.response?.status === 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("Failed to load notes");
                }
                setLoading(false);
            }
        }
        fetchNotes();
    }, []);

  return (
    <div className = "min-h-screen">
        <NavBar/>
        {isRateLimited && <RateLimitedUI />}
        <div className="max-w-7xl mx-auto p-4 mt-6">
            <div>
                {loading && <div className="text-center text-primary py-10">Loading Notes...</div>}
                {notes.length > 0  && !isRateLimited &&
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note) => (
                        <NoteCard key={note._id} note={note}/>    
                    ))}
                    
                </div>}

            </div>
        </div>
    </div>
  );
}

export default HomePage;