/* tslint:disable:max-line-length */
import {
    Logger,
} from "../../main/utility/importer";
/* tslint:enable:max-line-length */

declare let sails: any;

let log = new Logger(`launch.service`);

export class ServerLaunchClass {

    public initiate(cb: () => void) {
        this.proceed().then(cb).catch((err: any) => {
            log.error(err);
            this.lower();
        });
    }

    private async proceed() {
        // libraries
        await Promise.all([
            // SignupServiceClass.instance.ready(),
        ]);
        log.debug(`Default server language`, `::`, sails.config.i18n.defaultLocale);
        log.debug(`Log level`, `::`, sails.config.log.level);
        log.debug(`Database migrate`, `::`, sails.config.models.migrate);

        let requiredLaunchTasksArr = [
            //
        ];

        await Promise.all(requiredLaunchTasksArr);

        /* testing lift scripts area */

    }

    private lower() {
        sails.lower((lowerErr: Error) => {
            if (lowerErr) {
                log.error(`Error occurred lowering Sails app:`, lowerErr);
                return;
            }

            log.info(`Sails app lowered successfully!`);
            process.exit(1);
        });
    }
}

export let ServerLaunch = new ServerLaunchClass();
