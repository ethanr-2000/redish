import { DataBase } from "../database/database";
import { RedisCommandHandler } from "./models";
import resp from "../resp";
import log from "../util/log";

export const handlePing: RedisCommandHandler = (db: DataBase, messages: Array<string>): string => {
  log.INFO(`Handling PING`)
  return resp.simpleString("PONG");
}