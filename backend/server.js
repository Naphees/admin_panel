import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import bodyParser from 'body-parser';




// create express app
const app = express();

// load environment variable
dotenv.config();
// all custom modules



// all middlewareware
app.use(cookieParser()) // manage cookie
// manage client side request
app.use(cors({
    origin:["http://localhost:3000", ],  // manage client request
    methods:["GET","POST","PUT","PATCH","DELETE" ], // manage http methods
    credentials:true // manage cookie
}));
app.use(bodyParser.json()); // allow json data
app.use(bodyParser.urlencoded({extended:true})); // allow  url data like id



// ========  API Routes ========

// app.use("/api/auth",) // handle auth routes
// app.use("/api/db",)   // handle db routes




app.get("/",(req,res)=>{
    return res.send("Hello");
})





//  server running port


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
