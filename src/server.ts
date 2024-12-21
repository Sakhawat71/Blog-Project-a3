import mongoose from "mongoose";
import config from "./app/config";
import { Server } from 'http';
import app from "./app";

let server: Server;

async function main() {
    try {
        await mongoose.connect(config.dbUri as string);
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })


    } catch (error) {

    }
}