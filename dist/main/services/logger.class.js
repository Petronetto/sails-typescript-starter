"use strict";
const importer_1 = require("../../main/utility/importer");
class Logger {
    constructor(parent, child) {
        this.$path = [];
        if (typeof parent === "string") {
            this.path.push(parent);
            return;
        }
        this.path = this.path.concat(parent.path);
        if (child) {
            this.path.push(child);
        }
    }
    static translate(message) {
        return sails.__({
            locale: sails.config.i18n.defaultLocale,
            phrase: message,
        });
    }
    get path() {
        return this.$path;
    }
    set path(value) {
        this.$path = value;
    }
    child(child) {
        return new Logger(this, child);
    }
    log(...args) {
        return this.sailsLog("debug", ...args);
    }
    error(...args) {
        return this.sailsLog("error", ...args);
    }
    warn(...args) {
        return this.sailsLog("warn", ...args);
    }
    debug(...args) {
        return this.sailsLog("debug", ...args);
    }
    info(...args) {
        return this.sailsLog("info", ...args);
    }
    verbose(...args) {
        return this.sailsLog("verbose", ...args);
    }
    silly(...args) {
        return this.sailsLog("silly", ...args);
    }
    initiated(...args) {
        return this.log(`initiated`, ...args);
    }
    inspect(...args) {
        let out = [];
        importer_1._.each(args, (arg) => {
            out.push(importer_1.util.inspect(arg));
        });
        return this.log(out);
    }
    sailsLog(type, ...args) {
        sails.log[type](this.path.join(" :: "), "::", ...this.translateAllAny(...args));
        return this;
    }
    translateAllAny(...args) {
        importer_1._.each(args, (message, i) => {
            if (typeof message === "string") {
                args[i] = this.translate(message);
            }
        });
        return args;
    }
    translate(message) {
        return Logger.translate(message);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.class.js.map