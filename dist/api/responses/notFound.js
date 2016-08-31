"use strict";
const util = require("util");
module.exports = function (data, options) {
    let req = this.req;
    let res = this.res;
    let sails = req._sails;
    res.status(404);
    if (data !== undefined) {
        sails.log.verbose('Sending 404 ("Not Found") response: \n', data);
    }
    else {
        sails.log.verbose('Sending 404 ("Not Found") response');
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
            viewData = util.inspect(data, { depth: null });
        }
        catch (e) {
            viewData = undefined;
        }
    }
    if (options.view) {
        return res.view(options.view, { data: viewData, title: `Not Found` });
    }
    else {
        return res.view(`404`, { data: viewData, title: `Not Found` }, (err, html) => {
            if (err) {
                if (err.code === `E_VIEW_FAILED`) {
                    sails.log.verbose("res.notFound() :: " +
                        "Could not locate view for error page (sending JSON instead).  Details: ", err);
                }
                else {
                    sails.log.warn("res.notFound() :: When attempting to render error page view, " +
                        "an error occured (sending JSON instead).  Details: ", err);
                }
                return res.jsonx(data);
            }
            return res.send(html);
        });
    }
};
//# sourceMappingURL=notFound.js.map