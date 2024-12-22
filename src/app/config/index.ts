import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
    port: process.env.PORT,
    dbUri: process.env.DB_URI,
    NODE_ENV: process.env.NODE_ENV,
    saltRound: process.env.SALT_ROUND,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY,
    // host: process.env.HOST,
};