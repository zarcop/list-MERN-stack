export async function getAllNotes(req, res) {
    res.status(200).send("You just fetched the notes");
}

export async function createNote(req, res) {
    // Manual JSON parsing without middleware
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    
    req.on('end', () => {
        try {
            const data = JSON.parse(body);
            res.status(201).json({ message: "The note was created successfully!", data });
        } catch (error) {
            res.status(400).json({ error: "Invalid JSON" });
        }
    });
}

export async function updateNote(req, res) {
    res.status(200).json({ message: "The note was updated successfully!" });
}

export async function deleteNote(req, res) {
    res.status(200).json({ message: "The note was deleted successfully!" });
}