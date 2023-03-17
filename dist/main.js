"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const database_1 = require("./database/database");
const commands_1 = require("./commands");
const models_1 = require("./commands/models");
const resp_1 = require("./resp");
const log_1 = require("./util/log");
const process = require("process");
if (process.argv[2] === '-vv') {
    log_1.default.setLogLevel(log_1.default.LEVELS.DEBUG);
}
else if (process.argv[2] === '-v') {
    log_1.default.setLogLevel(log_1.default.LEVELS.INFO);
}
const db = new database_1.DataBase();
const parseRawDataToMessages = (data) => {
    const rawMessagesSplit = data.toString().split('\r\n');
    let messages = [];
    rawMessagesSplit.forEach((m) => {
        if (m && m[0] !== '$' && m[0] !== '*') {
            messages.push(m);
        }
    });
    return messages;
};
const server = net.createServer((connection) => {
    connection.on("data", (data) => {
        log_1.default.DEBUG(`Got Data ${data.toString()}`);
        const messages = parseRawDataToMessages(data);
        log_1.default.DEBUG(`Received command: ${messages.join(' ')}`);
        const command = messages[0].toUpperCase();
        if (!(command in models_1.RedisCommand)) {
            log_1.default.ERROR(`Given command was invalid: ${command}`);
            connection.write(resp_1.default.errorString('1'));
            return;
        }
        try {
            const reply = commands_1.commandHandlers[command](db, messages);
            log_1.default.DEBUG(`Replying "${reply}"`);
            connection.write(reply);
        }
        catch (e) {
            log_1.default.ERROR(e);
            log_1.default.ERROR(`An error occured while handling the command: ${messages.join(' ')}`);
            connection.write(resp_1.default.errorString('Error'));
            return;
        }
    });
});
log_1.default.INFO(`Redish has started...`);
server.listen(6379, "127.0.0.1");
