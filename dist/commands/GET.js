"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGet = void 0;
const resp_1 = require("../resp");
const log_1 = require("../util/log");
const handleGet = (db, messages) => {
    log_1.default.INFO(`Handling GET`);
    const key = messages[1];
    const value = db.get(key);
    if (value === '') {
        return resp_1.default.errorString("1");
    }
    else {
        return resp_1.default.bulkString(value);
    }
};
exports.handleGet = handleGet;
