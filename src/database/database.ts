import { DatabaseEntry } from "./models";
import log from "../util/log";

export class DataBase {
  db = new Map<string, DatabaseEntry>()

  constructor() {}

  public set(key: string, data: string, ttl: number): void {
    log.DEBUG(`Setting value in db: ${key}: ${data}`)
    this.db.set(key, {
      data,
      createdDate: new Date().getTime(),
      ttl
    })
  }

  public get(key: string): string {
    log.DEBUG(`Getting value from db: ${key}`)
    const response = this.db.get(key);

    if (!response) return ''

    const { data, createdDate, ttl } = response as DatabaseEntry;
    const currentDate = new Date().getTime();
    const expiryTime = createdDate + ttl;
    if (expiryTime <= currentDate) {
      log.DEBUG('Value expired. Deleting')
      this.db.delete(key)
      return ''
    }
    log.DEBUG(`Data found: ${data}`)
    return data
  }
}
