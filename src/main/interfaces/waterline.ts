/* tslint:disable:max-line-length */
import {
    //
} from "../../main/utility/importer";
/* tslint:enable:max-line-length */

export type Models = "";

export type WaterlineDataTypes = "string" | "text" | "integer" | "float" | "date" | "time" | "datetime" | "boolean" |
    "binary" | "array" | "json";

export interface WaterlineAttribute {
    type?: WaterlineDataTypes;
    required?: boolean;
    unique?: boolean;
    model?: Models;
    collection?: Models;
    via?: string;
    minLength?: number;
    maxLength?: number;
    defaultsTo?: any;
    enum?: string[] | number[];
}

export type WaterlineAttributes = { [id: string]: WaterlineAttribute; };
