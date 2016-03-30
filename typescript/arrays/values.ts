/**
 * Returns an array containing the property values of the specified object.
 */
export function values<T>(object: { [key: string]: T }): T[];

/**
 * Returns an array containing the property values of the specified object.
 */
export function values<T>(object: { [key: number]: T }): T[];

/**
 * Returns an array containing the property values of the specified object.
 */
export function values(object: Object): any[];

export default function values<T>(map: {[key: string]: T} | {[key: number]: T} | Object) {
  return map.values();
}
