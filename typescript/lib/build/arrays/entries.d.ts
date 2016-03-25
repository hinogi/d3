/**
 * Returns an array of key-value pairs containing the property values of the specified object.
 */
export declare function entries<T>(object: {
    [key: string]: T;
}): {
    key: string;
    value: T;
}[];
/**
 * Returns an array of key-value pairs containing the property values of the specified object.
 */
export declare function entries<T>(object: {
    [key: number]: T;
}): {
    key: string;
    value: T;
}[];
/**
 * Returns an array of key-value pairs containing the property values of the specified object.
 */
export declare function entries(object: Object): {
    key: string;
    value: any;
}[];
