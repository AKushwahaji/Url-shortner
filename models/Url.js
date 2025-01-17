// import mongoose from "mongoose";

// const shortUrlSchema = new mongoose.Schema({
//     longURL: {
//         type: String,
//         required: true,
//     },
//     shortcode: {
//         type: String,
//     },
// }, {
//     timestamps: true,
// });

// const Url = mongoose.model('Url', shortUrlSchema);
// export default Url;
import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortCode:String,
    longURL:String,
})
const Url = mongoose.model("Url",urlSchema);

export default Url;