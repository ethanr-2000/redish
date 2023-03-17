"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simpleString = (msg) => `+${msg}\r\n`;
const errorString = (msg) => `-${msg}\r\n`;
const bulkString = (msg) => `$${msg.length}\r\n${msg}\r\n`;
exports.default = {
    simpleString,
    errorString,
    bulkString
};
