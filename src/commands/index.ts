import { RedisCommand, RedisCommandHandler } from "./models";
import { handleCommand } from "./COMMAND";
import { handleEcho } from "./ECHO";
import { handleGet } from "./GET";
import { handlePing } from "./PING";
import { handleSet } from "./SET";

export const commandHandlers: { [key in RedisCommand]: RedisCommandHandler } = {
  [RedisCommand.COMMAND]: handleCommand,
  [RedisCommand.PING]: handlePing,
  [RedisCommand.ECHO]: handleEcho,
  [RedisCommand.GET]: handleGet,
  [RedisCommand.SET]: handleSet,
}
