import path from 'path';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Définissez vos routes, middlewares et autres configurations Express ici

// Exemple de route
app.get("/api", (req, res) => {
    res.json({ message: 'Hello world' });
});

// Démarrez le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
