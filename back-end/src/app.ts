import "express-async-errors";
import router from "./routers/index";
import errorHandler from "./middlewares/errorHandler"
import express, { json } from "express";
import cors from "cors";


const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler);


export default app;