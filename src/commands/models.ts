import { DataBase } from "../database/database";

export enum RedisCommand {
  COMMAND="COMMAND",
  PING="PING",
  ECHO="ECHO",
  GET="GET",
  SET="SET"
}

export type RedisCommandHandler = (db: DataBase, messages: Array<string>) => string;