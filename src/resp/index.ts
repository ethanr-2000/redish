const simpleString = (msg: string) => `+${msg}\r\n`;
const errorString = (msg: string) => `-${msg}\r\n`;
const bulkString = (msg: string) => `$${msg.length}\r\n${msg}\r\n`;

export default {
  simpleString,
  errorString,
  bulkString
}