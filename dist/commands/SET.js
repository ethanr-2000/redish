"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSet = void 0;
const resp_1 = require("../resp");
const log_1 = require("../util/log");
const handleSet = (db, messages) => {
    log_1.default.INFO(`Handling SET`);
    const key = messages[1];
    const value = messages[2];
    let ttl = Infinity;
    if (messages[3] && messages[4]) {
        const expiryType = messages[3];
        if (expiryType.toUpperCase() === 'PX') {
            ttl = parseInt(messages[4]);
        }
        else if (expiryType.toUpperCase() === 'EX') {
            ttl = parseInt(messages[4]) * 1000;
        }
    }
    db.set(key, value, ttl);
    return resp_1.default.simpleString("OK");
};
exports.handleSet = handleSet;
