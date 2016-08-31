"use strict";
const importer_1 = require("../../main/utility/importer");
let config = {
    models: {
        connection: `exampleDex`,
        migrate: importer_1.yargs.argv.migrate || "alter",
    },
    port: 5000,
};
module.exports = config;
//# sourceMappingURL=development.js.map