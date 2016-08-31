/* tslint:disable:max-line-length */
import {
    _, util,
} from "../../main/utility/importer";
/* tslint:enable:max-line-length */

declare let sails: any;

export type LogType = "error" | "warn" | "debug" | "info" | "verbose" | "silly";

export class Logger {
    public static translate(message: string): string | undefined {
        return sails.__({
            locale: sails.config.i18n.defaultLocale,
            phrase: message,
        });
    }

    private $path: string[] = [];
    get path() {
        return this.$path;
    }
    set path(value) {
        this.$path = value;
    }

    constructor(parent: Logger | string, child?: string) {
        if (typeof parent === "string") {
            this.path.push(parent);
            return;
        }

        this.path = this.path.concat(parent.path);
        if (child) {
            this.path.push(child);
        }
    }

    public child(child: string) {
        return new Logger(this, child);
    }

    public log(...args: any[]) {
        return this.sailsLog("debug", ...args);
    }

    public error(...args: any[]) {
        return this.sailsLog("error", ...args);
    }

    public warn(...args: any[]) {
        return this.sailsLog("warn", ...args);
    }

    public debug(...args: any[]) {
        return this.sailsLog("debug", ...args);
    }

    public info(...args: any[]) {
        return this.sailsLog("info", ...args);
    }

    public verbose(...args: any[]) {
        return this.sailsLog("verbose", ...args);
    }

    public silly(...args: any[]) {
        return this.sailsLog("silly", ...args);
    }

    public initiated(...args: any[]) {
        return this.log(`initiated`, ...args);
    }

    public inspect(...args: any[]) {
        let out: string[] = [];
        _.each(args, (arg) => {
            out.push(util.inspect(arg));
        });
        return this.log(out);
    }

    private sailsLog(type: LogType, ...args: any[]) {
        sails.log[type](this.path.join(" :: "), "::", ...this.translateAllAny(...args));
        return this;
    }

    private translateAllAny(...args: any[]) {
        _.each(args, (message, i) => {
            if (typeof message === "string") {
                args[i] = this.translate(message);// || message;
            }
        });
        return args;
    }

    private translate(message: string) {
        return Logger.translate(message);
    }

}
