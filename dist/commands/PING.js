"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePing = void 0;
const resp_1 = require("../resp");
const log_1 = require("../util/log");
const handlePing = (db, messages) => {
    log_1.default.INFO(`Handling PING`);
    return resp_1.default.simpleString("PONG");
};
exports.handlePing = handlePing;
