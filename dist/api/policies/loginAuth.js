"use strict";
const importer_1 = require("../../main/utility/importer");
module.exports = (req, res, next) => {
    let params = req.body || req.query || {};
    let token = params.token;
    if (typeof token !== "string") {
        return res.forbidden();
    }
    importer_1.jsonwebtoken.verify(token, sails.config.jwt.SUPER_SECRET).catch((err) => {
        return res.forbidden(`Invalid authorization token`);
    }).then((verified) => {
        _.assign(req, verified);
        return next();
    });
};
//# sourceMappingURL=loginAuth.js.map