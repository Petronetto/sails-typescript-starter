"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const importer_1 = require("../../main/utility/importer");
let log = new importer_1.Logger(`launch.service`);
class ServerLaunchClass {
    initiate(cb) {
        this.proceed().then(cb).catch((err) => {
            log.error(err);
            this.lower();
        });
    }
    proceed() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([]);
            log.debug(`Default server language`, `::`, sails.config.i18n.defaultLocale);
            log.debug(`Log level`, `::`, sails.config.log.level);
            log.debug(`Database migrate`, `::`, sails.config.models.migrate);
            let requiredLaunchTasksArr = [];
            yield Promise.all(requiredLaunchTasksArr);
        });
    }
    lower() {
        sails.lower((lowerErr) => {
            if (lowerErr) {
                log.error(`Error occurred lowering Sails app:`, lowerErr);
                return;
            }
            log.info(`Sails app lowered successfully!`);
            process.exit(1);
        });
    }
}
exports.ServerLaunchClass = ServerLaunchClass;
exports.ServerLaunch = new ServerLaunchClass();
//# sourceMappingURL=launch.service.js.map