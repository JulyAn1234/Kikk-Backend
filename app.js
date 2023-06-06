const cors = require("cors");
const express = require ("express");
const mongoose = require("mongoose");
const ProjectRoutes = require ("./src/routes/product");
const app = express();
const PORT = process.env.PORT || 3977
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors());
app.use(express.json());
app.use("/", ProjectRoutes);

const connectDB = async () => {
    try {
        await mongoose.connect(
            DATABASE_URL
        );
        app.listen(PORT);
    }catch(err){
        console.log("Failed to connect to Mongo", err);
    }
}

connectDB();