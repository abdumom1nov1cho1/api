require("dotenv").config();
const todosRouter = require('./routes/todos');//esxpress
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express();//express () bn qoyilwi kere ctobi cistyro bosin!

app.use(cors())
app.use(express.json());
app.use('/TrailFX.com', todosRouter);

const PORT = process.env.PORT || 8000;//env port ucun

async function start () {
    try {
     await mongoose.connect(process.env.MONGO_URL, {
        useNewURLParser: true,
     });
        .then(() => console.log("ok")).catch(() => console.log("bad"))
     app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
    } catch(error) {
        console.log(error);
    }
}

start()
