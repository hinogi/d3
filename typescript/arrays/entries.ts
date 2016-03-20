/**
 * Returns an array of key-value pairs containing the property values of the specified object.
 */
export function entries<T>(object: { [key: string]: T }): { key: string; value: T }[];

/**
 * Returns an array of key-value pairs containing the property values of the specified object.
 */
export function entries<T>(object: { [key: number]: T }): { key: string; value: T }[];

/**
 * Returns an array of key-value pairs containing the property values of the specified object.
 */
export function entries(object: Object): { key: string; value: any }[];

export function entries(map: any): any {
  let entries: Array<any> = [];
  for (let key in map) entries.push({key: key, value: map[key]});
  return entries;
}
