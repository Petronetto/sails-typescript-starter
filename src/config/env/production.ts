/**
 * ------------------------------------------------------------------------
 *                     Production environment settings
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
        connection: `exampleProd`,
        migrate: "safe",
    },

    port: 5002,

};

module.exports = config;
