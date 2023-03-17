"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEcho = void 0;
const resp_1 = require("../resp");
const handleEcho = (db, messages) => {
    const stringToEcho = messages[1];
    if (!stringToEcho.includes(' ')) {
        return resp_1.default.simpleString(stringToEcho);
    }
    return resp_1.default.bulkString(stringToEcho);
};
exports.handleEcho = handleEcho;
