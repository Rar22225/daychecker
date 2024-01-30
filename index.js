import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a weekday";
  let adv = "lets be savages! ";

  if (day === 0 || day === 6) {
    type = "weekend";
    adv = adv + "again!";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`server running port on port${port}.`);
});

/* import path from "path";
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
  res.render('index.ejs', { dayType });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function getDay() {
  const currentDate = new Date();
  return currentDate.getDay();
} */
