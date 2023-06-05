const cors = require("cors");
const express = require ("express");
const mongoose = require("mongoose");
const ProjectRoutes = require ("./src/routes/product");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", ProjectRoutes);

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://julianhernandezjara:4kZpe5Yv1vU91xoq@cluster0.ctzrbqo.mongodb.net/?retryWrites=true&w=majority"
        );
        app.listen(3000);
    }catch(err){
        console.log("Failed to connect to Mongo", err);
    }
}

connectDB();