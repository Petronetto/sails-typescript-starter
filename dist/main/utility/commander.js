"use strict";
const importer_1 = require("../utility/importer");
class CommanderClass {
    constructor() {
        if (CommanderClass.$instance) {
            throw new Error(`Use Singleton.instance instead of new`);
        }
        CommanderClass.$instance = this;
    }
    static get instance() {
        return this.$instance;
    }
    ready() {
        let allowedArgs = {
            db: {
                alias: ["D", "generate-database"],
                describe: "generate default required database entries",
            },
            debug: {
                alias: ["d"],
                describe: "debug mode",
            },
            "force-http": {
                alias: ["h"],
                describe: "force http protocol",
            },
            logs: {
                alias: ["l", "logging", "log-level"],
                choices: ["silly", "verbose", "info", "debug", "warn", "error", "silent"],
                describe: "logging level",
                requiresArg: true,
                type: "string",
            },
            migrate: {
                alias: ["m"],
                choices: ["alter", "safe", "drop"],
                describe: "force other migration type",
                requiresArg: true,
                type: "string",
            },
            port: {
                alias: ["p"],
                describe: "port to launch app",
                requiresArg: true,
                type: "string",
            },
        };
        importer_1.yargs.version(importer_1.packagejson.version)
            .option("language", {
            alias: ["L", "lang"],
            choices: ["pl", "en"],
            describe: "server-side language setup",
            requiresArg: true,
            type: "string",
        });
        if (importer_1.yargs.argv.language) {
            importer_1.yargs.locale(importer_1.yargs.argv.language);
        }
        importer_1._.each(allowedArgs, (argument, name) => importer_1.yargs.option(name, argument));
        importer_1.yargs.help();
        importer_1.yargs.strict();
    }
}
CommanderClass.$instance = new CommanderClass();
exports.CommanderClass = CommanderClass;
//# sourceMappingURL=commander.js.map