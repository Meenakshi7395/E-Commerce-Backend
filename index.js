import express, {json} from 'express';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

mongoose.connect('mongodb+srv://meenakshisharma7395_db_user:UPr5vKeuD3OMA3jP@ecommerce.iqmxa0j.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));



import users from "./routes/users.js"

app.use(bodyParser.json());

var homePage = `
<h1>Welcome to E-Commerce Backend</h1>
`
app.get('/',(req,res) => {
    // res.send({name:"Hello world"})
    res.send(homePage);

});
  
// Routes
app.use('/users', users);

app.listen(PORT,()=> console.log(`server runnig on http://localhost:${PORT}`));