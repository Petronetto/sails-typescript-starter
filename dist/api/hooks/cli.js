"use strict";
const importer_1 = require("../../main/utility/importer");
let log = new importer_1.Logger(`cli`);
module.exports = (sails) => {
    process.on("uncaughtException", (err) => {
        log.error(err);
    });
    process.on("unhandledRejection", (err) => {
        log.error(err);
    });
    sails.log.verbose(`cli hook loaded successfully`);
    return {};
};
//# sourceMappingURL=cli.js.map