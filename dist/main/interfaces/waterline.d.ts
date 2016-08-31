export declare type Models = "";
export declare type WaterlineDataTypes = "string" | "text" | "integer" | "float" | "date" | "time" | "datetime" | "boolean" | "binary" | "array" | "json";
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
export declare type WaterlineAttributes = {
    [id: string]: WaterlineAttribute;
};
