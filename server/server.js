import express from "express";
import "./config/dotenv.js";
import carsRouter from "./routes/cars.js";
import cors from "cors";
import path from "path";
import favicon from "serve-favicon";

const app = express();

app.use(express.json());
app.use("/api/cars", carsRouter);
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Cars API</h1>');
});

if (process.env.NODE_ENV === 'development') {
  app.use(favicon(path.resolve('../', 'client', 'public', 'lightning.png')))
} else if (process.env.NODE_ENV === 'production') {
  app.use(favicon(path.resolve('public', 'lightning.png')))
  app.use(express.static('public'))
};

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (_, res) =>
    res.sendFile(path.resolve('public', 'index.html'))
  );
};

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
});