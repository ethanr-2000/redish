"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandHandlers = void 0;
const models_1 = require("./models");
const COMMAND_1 = require("./COMMAND");
const ECHO_1 = require("./ECHO");
const GET_1 = require("./GET");
const PING_1 = require("./PING");
const SET_1 = require("./SET");
exports.commandHandlers = {
    [models_1.RedisCommand.COMMAND]: COMMAND_1.handleCommand,
    [models_1.RedisCommand.PING]: PING_1.handlePing,
    [models_1.RedisCommand.ECHO]: ECHO_1.handleEcho,
    [models_1.RedisCommand.GET]: GET_1.handleGet,
    [models_1.RedisCommand.SET]: SET_1.handleSet,
};
