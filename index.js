import express, {json} from 'express';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.use(cors());
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


import users from "./routes/users.js"
import items from "./routes/items.js"
import cartItem from "./routes/cartItem.js"

app.use(bodyParser.json());

var homePage = `
<h1>Welcome to E-Commerce Backend</h1>
`
app.get('/',(req,res) => {
    res.send(homePage);

});

app.use('/users', users);
app.use('/items', items);
app.use('/cart', cartItem);

app.listen(PORT,()=> console.log(`server runnig on http://localhost:${PORT}`));