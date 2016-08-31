/* tslint:disable:max-line-length */
import {
    Ajv, ValidatorPolish, ibantools,
} from "../../main/utility/importer";
/* tslint:enable:max-line-length */

let polishValidator = new ValidatorPolish();
let ajv = Ajv({
    allErrors: true,
});

let Helper = {
    characterGroupsUsed: (str: string) => {
        let characterGroupsUsed = 0;
        if (Helper.hasNumber(str)) {
            characterGroupsUsed++;
        }

        if (Helper.hasLowerCase(str)) {
            characterGroupsUsed++;
        }

        if (Helper.hasUpperCase(str)) {
            characterGroupsUsed++;
        }

        if (Helper.hasSpecialCharacter(str)) {
            characterGroupsUsed++;
        }

        return characterGroupsUsed;
    },
    hasLowerCase: (str: string) => {
        return (/[a-z]/.test(str));
    },
    hasNumber: (str: string) => {
        return (/\d/.test(str));
    },
    hasSpecialCharacter: (str: string) => {
        return (/^[a-zA-Z0-9- ]*$/.test(str) === false);
    },
    hasUpperCase: (str: string) => {
        return (/[A-Z]/.test(str));
    },
    isLetter: (str: string) => {
        return str.length === 1 && str.match(/[a-zA-Z]/i);
    },
    isNumeric: (str: string) => {
        return !isNaN(parseInt(str, 10));
    },
};

// Should contain also always 1 normal character.
ajv.addFormat("twoOrMoreCharacterGroups", (val: string) => {
    return Helper.characterGroupsUsed(val) >= 2;
});

ajv.addFormat("phone", (val) => {
    let var1 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(val);
    let var2 = /^\(?([0-9]{3})\)\?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(val);
    let var3 = /^\d{10}$/.test(val);
    let var4 = /^\d{9}$/.test(val);
    let out = (var1 || var2 || var3 || var4);
    return out;
});

ajv.addFormat("numeric", Helper.isNumeric);

ajv.addFormat("pesel", polishValidator.pesel);

ajv.addFormat("nip", polishValidator.nip);

ajv.addFormat("regon", polishValidator.regon);

ajv.addFormat("identity card", polishValidator.identityCard);

ajv.addFormat("account number", (val) => {
    if (!Helper.isLetter(val.charAt(0)) && !Helper.isLetter(val.charAt(1))) {
        val = "PL" + val;
    }

    return ibantools.isValidIBAN(val);
});

let noSpecial = "^[a-zA-Z" +
    "àáâäãåąčćęèéêëėįìíîïłńòóôöõøśùúûüųūÿýżź" +
    "ñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØŚÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$";

let noSpecialCharacters = new RegExp(noSpecial);

ajv.addFormat("no special characters", (val) => {
    return noSpecialCharacters.test(val);
});

ajv.addFormat("no special characters allow numbers", (val) => {
    let var1 = noSpecialCharacters.test(val);
    let var2 = /^[0-9]+$/.test(val);
    let out = (var1 || var2);
    return out;
});

ajv.addFormat("no special characters allow numbers and null", (val) => {
    let var1 = noSpecialCharacters.test(val);
    let var2 = /^[0-9]+$/.test(val);
    let var3 = val ? false : true;
    let out = (var1 || var2 || var3);
    return out;
});

export { ajv, Ajv };
