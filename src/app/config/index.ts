import dotenv from 'dotenv';
import e from 'express';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
    port: process.env.PORT,
    dbUri: process.env.DB_URI,
    // host: process.env.HOST,
    // saltWorkFactor: process.env.SALT_WORK_FACTOR,
    // accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    // refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    // refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY,
};