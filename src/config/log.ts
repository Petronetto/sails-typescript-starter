/* tslint:disable:max-line-length */
import {
    colors, moment, winston, yargs,
} from "../main/utility/importer";
/* tslint:enable:max-line-length */

import i18n from "./i18n.js";

moment.locale(i18n.defaultLocale);

type LogLevel = "silly" | "verbose" | "info" | "debug" | "warn" | "error" | "silent";

let level: LogLevel = "debug";
if (yargs.argv.logs) {
    level = yargs.argv.logs;
}

let winstonConsole = {
    colorize: true,
    json: false,
    level: level,
    prettyPrint: true,
    timestamp: function() {
        // return colors.grey(`${moment().calendar()}:${moment().format(`ss`)}`);
        return colors.grey(`[${moment().format("HH:mm:ss")}]`);
    },
};

let logger = new (winston.Logger)({
    exceptionHandlers: [
        new winston.transports.File({
            filename: `./data/logs/exceptions.log`,
        }),
    ],
    transports: [
        new (winston.transports.Console)(winstonConsole),
        new winston.transports.File({
            colorize: true,
            filename: `./data/logs/main.log`,
            json: true,
            level: level,
            maxFiles: 3,
            maxsize: 1280000,
            timestamp: true,
        }),
    ],
});

let log = {
    colorize: false,
    custom: logger,
    filePath: `./data/logs/main.log`,
    inspect: false,
    level: level,
};

module.exports.log = log;
