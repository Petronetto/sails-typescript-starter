"use strict";
const util = require("util");
module.exports = function (data, options) {
    let req = this.req;
    let res = this.res;
    let sails = req._sails;
    res.status(400);
    if (data !== undefined) {
        sails.log.verbose(`Sending 400 ("Bad Request") response: \n`, data);
    }
    else {
        sails.log.verbose(`Sending 400 ("Bad Request") response`);
    }
    if (sails.config.environment === `production` && sails.config.keepResponseErrors !== true) {
        data = undefined;
    }
    if (req.wantsJSON || sails.config.hooks.views === false) {
        return res.jsonx(data);
    }
    options = (typeof options === "string") ? { view: options } : options || {};
    let viewData = data;
    if (!(viewData instanceof Error) && typeof viewData === "object") {
        try {
            viewData = util.inspect(data, {
                depth: null,
            });
        }
        catch (e) {
            viewData = undefined;
        }
    }
    if (options.view) {
        sails.log.debug(options);
        return res.view(options.view, { data: viewData, title: `Bad Request` });
    }
    else {
        return res.guessView({ data: viewData, title: `Bad Request` }, () => {
            return res.jsonx(data);
        });
    }
};
//# sourceMappingURL=badRequest.js.map