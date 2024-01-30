import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use path to join directory paths for serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const dayType = getDay();
  res.render('index', { dayType });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function getDay() {
  const currentDate = new Date();
  return currentDate.getDay();
}
