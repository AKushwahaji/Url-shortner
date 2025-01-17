
import Url from '../models/Url.js';
import {nanoid} from 'nanoid'
export const urlShort = async (req, res) => {
    try {
        const longUrl = req.body.longURL; 
        const shortCode = nanoid(8);
        const shortUrl = `https://url-shortner-eight-blush.vercel.app/${shortCode}`;
        
        // console.log("longUrl - ", longUrl);

        const newUrl = new Url({
            shortCode ,
            longURL: longUrl
        });
    
        // console.log("newUrl - ", newUrl);

        await newUrl.save();
        console.log("URL shortened successfully");
        res.render("index.ejs", { shortUrl });
    } catch (error) {
        console.error("Error shortening URL: ", error.message);
        res.status(500).send("Internal Server Error");
    }
};
export const getOriginalUrl = async (req,res) =>{
    const shortCode = req.params.shortCode; // params are used to get the query code or params
    const urlData = await Url.findOne({shortCode});
    if(urlData){
        res.redirect(urlData.longURL);
    }else{
        res.status(404).send("URL not found");
    }
}

