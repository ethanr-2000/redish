"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colours = require("./cli-formatting");
var LEVELS;
(function (LEVELS) {
    LEVELS[LEVELS["DEBUG"] = 0] = "DEBUG";
    LEVELS[LEVELS["INFO"] = 1] = "INFO";
    LEVELS[LEVELS["ERROR"] = 2] = "ERROR";
})(LEVELS || (LEVELS = {}));
var logLevel = LEVELS.ERROR;
const setLogLevel = (l) => { logLevel = l; };
const sanitize = (s) => {
    return s.replace(/\n/g, '\\n').replace(/\r/g, '\\r');
};
const DEBUG = (s) => {
    if (logLevel <= LEVELS.DEBUG) {
        console.debug(colours.FgGreen, sanitize(s));
    }
};
const INFO = (s) => {
    if (logLevel <= LEVELS.INFO) {
        console.info(colours.FgBlue, sanitize(s));
    }
};
const ERROR = (s) => {
    if (logLevel <= LEVELS.ERROR) {
        console.error(colours.FgRed, sanitize(s));
    }
};
exports.default = {
    LEVELS,
    setLogLevel,
    DEBUG,
    INFO,
    ERROR
};
