"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const log_1 = require("../util/log");
class DataBase {
    constructor() {
        this.db = new Map();
    }
    set(key, data, ttl) {
        log_1.default.DEBUG(`Setting value in db: ${key}: ${data}`);
        this.db.set(key, {
            data,
            createdDate: new Date().getTime(),
            ttl
        });
    }
    get(key) {
        log_1.default.DEBUG(`Getting value from db: ${key}`);
        const response = this.db.get(key);
        if (!response)
            return '';
        const { data, createdDate, ttl } = response;
        const currentDate = new Date().getTime();
        const expiryTime = createdDate + ttl;
        if (expiryTime <= currentDate) {
            log_1.default.DEBUG('Value expired. Deleting');
            this.db.delete(key);
            return '';
        }
        log_1.default.DEBUG(`Data found: ${data}`);
        return data;
    }
}
exports.DataBase = DataBase;
