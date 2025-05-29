import app from './app.js';
import mongoose from 'mongoose';
import config from './config/index.js';


const url = config.DB_URL;

const connectToDB = async () => {
    try {
        await mongoose.connect(url);
        app.listen(config.PORT, () => {
            console.log("Connected with DB...")
            console.log(`Listening on http://localhost:${config.PORT}`);
        })
        
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}

connectToDB();

