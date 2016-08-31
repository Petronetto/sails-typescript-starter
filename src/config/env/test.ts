/**
 * ------------------------------------------------------------------------
 *                    PreProduction environment settings
 * ------------------------------------------------------------------------
 */
/* tslint:disable:max-line-length */
import {
    //
} from "../../main/utility/importer";
/* tslint:enable:max-line-length */

let config = {

    // Models
    models: {
        connection: `exampleTest`,
        migrate: "safe",
    },

    port: 5001,

};

module.exports = config;
