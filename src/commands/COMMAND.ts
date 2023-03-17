import { DataBase } from "../database/database";
import { RedisCommandHandler } from "./models";
import resp from "../resp";
import log from "../util/log";

export const handleCommand: RedisCommandHandler = (db: DataBase, messages: Array<string>): string => {
  log.INFO(`Got connection`)
  return resp.simpleString('');
}