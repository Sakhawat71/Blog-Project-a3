"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./app/config"));
const app_1 = __importDefault(require("./app"));
let server;
async function main() {
    try {
        await mongoose_1.default.connect(config_1.default.dbUri);
        server = app_1.default.listen(config_1.default.port, () => {
            console.log(`Example app listening on port ${config_1.default.port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
    ;
}
;
main();
