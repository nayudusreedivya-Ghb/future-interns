const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Lead = require("./models/Lead");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/crmDB");

app.post("/leads", async (req, res) => {

    const lead = new Lead(req.body);

    await lead.save();

    res.json({ message: "Lead Added" });

});

app.get("/leads", async (req, res) => {

    const leads = await Lead.find();

    res.json(leads);

});

app.delete("/leads/:id", async (req, res) => {

    await Lead.findByIdAndDelete(req.params.id);

    res.json({ message: "Lead Deleted" });

});

app.listen(5000, () => {
    console.log("CRM Running on Port 5000");
});