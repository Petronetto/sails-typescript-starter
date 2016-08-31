"use strict";
const util = require("util");
module.exports = function (data, options) {
    let req = this.req;
    let res = this.res;
    let sails = req._sails;
    sails.log.silly(`res.created() :: Sending 201 ("CREATED") response`);
    res.status(201);
    if (req.wantsJSON || sails.config.hooks.views === false) {
        return res.jsonx(data);
    }
    options = (typeof options === "string") ? {
        view: options,
    } : options || {};
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
        return res.view(options.view, {
            data: viewData,
            title: `Created`,
        });
    }
    else {
        return res.guessView({
            data: viewData,
            title: `Created`,
        }, () => {
            return res.jsonx(data);
        });
    }
};
//# sourceMappingURL=created.js.map