import dotenv from 'dotenv';

dotenv.config();

const {PORT, DB_URL} = process.env;


const config = { PORT, DB_URL }

export default config;