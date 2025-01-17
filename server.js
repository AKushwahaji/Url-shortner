import express from  'express'
import dotenv from 'dotenv'
import dbConfig from './dbConfig.js';
import { urlShort,getOriginalUrl } from './controllers/url.js';

dotenv.config();
const app = express();

dbConfig();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/',(req,res)=>{
    res.render('index.ejs',{shortUrl:null});
})
app.post('/form-data',urlShort);
app.get('/:shortCode',getOriginalUrl);



const port = process.env.PORT || 5000;
app.listen(5000,()=>
console.log("Server is running on port 5000"));
