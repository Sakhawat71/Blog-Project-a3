"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load environment variables from .env file
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
exports.default = {
    port: process.env.PORT,
    dbUri: process.env.DB_URI,
    // host: process.env.HOST,
    // saltWorkFactor: process.env.SALT_WORK_FACTOR,
    // accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    // refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    // refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY,
};
