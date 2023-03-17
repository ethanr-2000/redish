import { DataBase } from "../database/database";
import { RedisCommandHandler } from "./models";
import resp from "../resp";
import log from "../util/log";

export const handleSet: RedisCommandHandler = (db: DataBase, messages: Array<string>): string => {
  log.INFO(`Handling SET`)
  const key = messages[1];
  const value = messages[2];
  let ttl = Infinity;

  if (messages[3] && messages[4]) {
    const expiryType = messages[3];
  
    if (expiryType.toUpperCase() === 'PX') {
      ttl = parseInt(messages[4])
    } else if (expiryType.toUpperCase() === 'EX') {
      ttl = parseInt(messages[4]) * 1000;
    }
  }

  db.set(key, value, ttl)
  return resp.simpleString("OK");
}