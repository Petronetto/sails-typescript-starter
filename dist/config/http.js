"use strict";
module.exports.http = {
    middleware: {
        order: [
            "startRequestTimer",
            "cookieParser",
            "bodyParser",
            "handleBodyParserError",
            "compress",
            "methodOverride",
            "poweredBy",
            "requestLogger",
            "router",
            "www",
            "favicon",
            "404",
            "500",
        ],
        poweredBy: (req, res, next) => {
            let app = sails.hooks.http.app;
            app.disable(`x-powered-by`);
            res.set(`X-Powered-By`, `billon <billon.info>`);
            next();
        },
        requestLogger: (req, res, next) => {
            let type = `empty`;
            if (req.body) {
                type = `body`;
            }
            else if (req.query) {
                type = `query`;
            }
            sails.log.debug(`Requested ::`, req.method, req.url, `:: ${type} ::`, req.body || req.query || {});
            return next();
        },
    },
};
//# sourceMappingURL=http.js.map