import * as net from "net";
import { DataBase } from "./database/database";
import { commandHandlers } from "./commands";
import { RedisCommand } from "./commands/models";
import resp from "./resp";
import log from "./util/log"
import process = require("process");

if (process.argv[2] === '-vv') {
  log.setLogLevel(log.LEVELS.DEBUG);
} else if (process.argv[2] === '-v') {
  log.setLogLevel(log.LEVELS.INFO);
}

const db = new DataBase();

const parseRawDataToMessages = (data: Buffer): Array<string> => {
  const rawMessagesSplit = data.toString().split('\r\n');
  let messages: Array<string> = []
  rawMessagesSplit.forEach((m) => {
    if (m && m[0] !== '$' && m[0] !== '*') {
      messages.push(m)
    }
  })
  return messages
}

const server = net.createServer((connection) => {
  connection.on("data", (data: Buffer) => {
    log.DEBUG(`Got Data ${data.toString()}`)

    const messages = parseRawDataToMessages(data);
    log.DEBUG(`Received command: ${messages.join(' ')}`)

    const command = messages[0].toUpperCase();
    if (!(command in RedisCommand)) {
      log.INFO(`Given command was invalid: ${command}`)
      connection.write(resp.errorString('1'));
      return
    }
    
    try {
      const reply = commandHandlers[command](db, messages);
      log.DEBUG(`Replying "${reply}"`)
      connection.write(reply);
    } catch (e) {
      log.ERROR(e)
      log.ERROR(`An error occured while handling the command: ${messages.join(' ')}`)
      connection.write(resp.errorString('Error'));
      return
    }
  })
});

log.ALWAYS(`Redish has started...`)
server.listen(6379, "127.0.0.1");
