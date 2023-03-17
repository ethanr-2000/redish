import { DataBase } from "../database/database";
import { RedisCommandHandler } from "./models";
import resp from "../resp";
import log from "../util/log";

export const handleEcho: RedisCommandHandler = (db: DataBase, messages: Array<string>): string => {
  log.INFO(`Handling ECHO`)
  const stringToEcho = messages[1];
  if (!stringToEcho.includes(' ')) {
    return resp.simpleString(stringToEcho)
  }
  return resp.bulkString(stringToEcho);
}