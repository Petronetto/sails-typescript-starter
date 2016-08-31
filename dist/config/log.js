"use strict";
const importer_1 = require("../main/utility/importer");
const i18n_js_1 = require("./i18n.js");
importer_1.moment.locale(i18n_js_1.default.defaultLocale);
let level = "debug";
if (importer_1.yargs.argv.logs) {
    level = importer_1.yargs.argv.logs;
}
let winstonConsole = {
    colorize: true,
    json: false,
    level: level,
    prettyPrint: true,
    timestamp: function () {
        return importer_1.colors.grey(`[${importer_1.moment().format("HH:mm:ss")}]`);
    },
};
let logger = new (importer_1.winston.Logger)({
    exceptionHandlers: [
        new importer_1.winston.transports.File({
            filename: `./data/logs/exceptions.log`,
        }),
    ],
    transports: [
        new (importer_1.winston.transports.Console)(winstonConsole),
        new importer_1.winston.transports.File({
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
//# sourceMappingURL=log.js.map