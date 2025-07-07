import Note from "../model/Note.js";


export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch(error) {
        res.status(500).json({"Internal Server Error when retrieving notes.": error.message});
    }
}

export async function createNote(req, res) {
    try {
        const {title, body} = req.body;
        const note = new Note({title, content});
        const savedNote =  await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ "Internal Server Error when saving notes.": error.message });
    }
}

export async function updateNote(req, res) {
    try{
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title, content});
        if (!updateNote) return res.status(404).json({message: "Note not found."});
        res.status(200).json(updateNote);
    } catch(error) {
        res.status(500).json({"Internal Server Error when updating notes.": error.message})

    }
}

export async function deleteNote(req, res) {
   try {
        const {title, cont} = req.body;
        const deletedNote = await Note.findByIdAndDelete(req.params.id, {title,content});
        if (!deletedNote) return res.status(404).json({message: "Could not find note to delete"})
        res.status(200).json(deletedNote);
   } catch (error) {
    res.status(500).json({"Internal Server Error when deleting the note" : error.message})
   }
}