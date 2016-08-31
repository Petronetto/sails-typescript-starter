export declare type LogType = "error" | "warn" | "debug" | "info" | "verbose" | "silly";
export declare class Logger {
    static translate(message: string): string | undefined;
    private $path;
    path: string[];
    constructor(parent: Logger | string, child?: string);
    child(child: string): Logger;
    log(...args: any[]): this;
    error(...args: any[]): this;
    warn(...args: any[]): this;
    debug(...args: any[]): this;
    info(...args: any[]): this;
    verbose(...args: any[]): this;
    silly(...args: any[]): this;
    initiated(...args: any[]): this;
    inspect(...args: any[]): this;
    private sailsLog(type, ...args);
    private translateAllAny(...args);
    private translate(message);
}
