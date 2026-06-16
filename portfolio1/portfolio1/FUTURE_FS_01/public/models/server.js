const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    "YOUR_MONGODB_ATLAS_CONNECTION_STRING"
);

app.post("/contact", async (req, res) => {

    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    await contact.save();

    res.json({
        message: "Message Saved Successfully"
    });
});

app.get("/messages", async (req, res) => {

    const data = await Contact.find();

    res.json(data);
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});