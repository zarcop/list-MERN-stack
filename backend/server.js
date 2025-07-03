import express from "express"

const app = express()

app.get("/api/notes", (req, res) => {
    // really simple API representation.
    //send a response to the client.
    res.status(200).send("This is a nice set of notes.")
})

app.listen(5001, () => {
    console.log("Server has been started on port 5001");
})

