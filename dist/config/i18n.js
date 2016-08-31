"use strict";
const importer_1 = require("../main/utility/importer");
let i18n = {
    defaultLocale: importer_1.yargs.argv.language || "pl",
    extension: ".json",
    locales: ["pl", "en"],
    updateFiles: true,
};
module.exports.i18n = i18n;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = i18n;
//# sourceMappingURL=i18n.js.map