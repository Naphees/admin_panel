import db from './dbConnect.js';



const dbCreate = async() =>{
    try{
            await db.execute(`CREATE DATABASE IF NOT EXISTS admin_panel`);
            console.log(`Database created successfully!`);
    }catch(error){
        console.log(error.message);
    }
}
 dbCreate();

const usersTable = async()=>{
    try{
                 await db.execute(`
                    CREATE TABLE IF NOT EXISTS users(
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(50) NOT NULL,
                    password VARCHAR(255) NOT NULL ,
                    email VARCHAR(50) NOT NULL UNIQUE,
                    role ENUM('admin','user') DEFAULT 'user',
                    mobile VARCHAR(15) NOT NULL UNIQUE,
                    user_image VARCHAR(255),
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )
                    `);
                    console.log(`Users table created succefully!`);
    }catch(error){
        console.log(error.message);
    }
}
 usersTable();