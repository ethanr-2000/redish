import * as colours from "./cli-formatting"

enum LEVELS {
  DEBUG, INFO, ERROR
}

var logLevel: number = LEVELS.ERROR;

const setLogLevel = (l: LEVELS): void => { logLevel = l }

const sanitize = (s: string) => {
  return s.replace(/\n/g, '\\n').replace(/\r/g, '\\r')
}

const DEBUG = (s: string) => {
  if (logLevel <= LEVELS.DEBUG) {
    console.debug(colours.FgGreen, sanitize(s))
  }
}

const INFO = (s: string) => {
  if (logLevel <= LEVELS.INFO) { console.info(colours.FgBlue, sanitize(s)) }
}

const ERROR = (s: string) => {
  if (logLevel <= LEVELS.ERROR) { console.error(colours.FgRed, sanitize(s)) }
}

export default {
  LEVELS,
  setLogLevel,
  DEBUG,
  INFO,
  ERROR
}