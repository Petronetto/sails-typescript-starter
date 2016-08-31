/**
 * ------------------------------------------------------------------------
 *                     Development environment settings
 * ------------------------------------------------------------------------
 */
/* tslint:disable:max-line-length */
import {
    yargs,
} from "../../main/utility/importer";
/* tslint:enable:max-line-length */

let config = {

    // Models
    models: {
        connection: `exampleDex`,
        migrate: yargs.argv.migrate || "alter",
    },

    port: 5000,

};

module.exports = config;
