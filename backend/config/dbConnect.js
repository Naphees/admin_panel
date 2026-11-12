import mysql from 'mysql2/promise';
import dotenv from 'dotenv';


// reload dotenv
dotenv.config();


const db = await  mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME,
    
})
console.log(`Database connected!`);
export default db;