import express from 'express';
import postRoutes from "./routes/post.routes.js";
import config from "./configuration/config.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use('/forum', postRoutes);

app.use((req, res) =>
    res.status(404).type('text/plain; charset=utf-8').send('Not Found')
);

const connectDb = async () => {
    try {
        await mongoose.connect(config.mongodb.uri, {dbName: config.mongodb.db.dbName});
        console.log("MongoDB Connected!");
    }
    catch (err) {
        console.log("Failed to connect to DB", err);
    }
}

async function startServer() {
    await connectDb();
    app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
}

await startServer();