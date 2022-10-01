import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = Number(process.env.PORT) || 5009;

app.listen(PORT, () => {
  console.log(`Server com TS rodando na porta: ${PORT}`);
});