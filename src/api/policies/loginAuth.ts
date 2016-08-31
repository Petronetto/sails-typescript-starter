/**
 * ------------------------------------------------------------------------
 *                                loginAuth
 * ------------------------------------------------------------------------
 */
/* tslint:disable:max-line-length */
import {
    Request, Response, express, jsonwebtoken as jwt,
} from "../../main/utility/importer";
/* tslint:enable:max-line-length */

declare let sails: any;

interface VerifiedData {
    user: {
        id: string,
    };
}

module.exports = (req: Request, res: Response, next: express.NextFunction) => {
    let params = req.body || req.query || {};

    let token: string | undefined = params.token;

    if (typeof token !== "string") {
        return res.forbidden();
    }

    // verifies secret and checks exp
    jwt.verify(token, sails.config.jwt.SUPER_SECRET).catch((err: Error) => {
        return res.forbidden(`Invalid authorization token`);
    }).then((verified: VerifiedData) => {
        _.assign(req, verified);
        return next();
    });
};
