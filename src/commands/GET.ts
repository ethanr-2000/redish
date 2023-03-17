import { RedisCommandHandler } from "./models";
import { DataBase } from "../database/database";
import resp from "../resp";
import log from "../util/log";

export const handleGet: RedisCommandHandler = (db: DataBase, messages: Array<string>): string => {
  log.INFO(`Handling GET`)
  const key = messages[1]
  const value = db.get(key)
  if (value === '') {
    return resp.errorString("1");
  } else {
    return resp.bulkString(value);
  }
}