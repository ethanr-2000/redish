"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCommand = void 0;
const resp_1 = require("../resp");
const log_1 = require("../util/log");
const handleCommand = (db, messages) => {
    log_1.default.INFO(`Got connection`);
    return resp_1.default.simpleString('');
};
exports.handleCommand = handleCommand;
