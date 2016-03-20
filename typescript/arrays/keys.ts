/**
 * Returns the enumerable property names of the specified object.
 * @param object a JavaScript object
 */
export function keys(map: Map<any, any>): Array<string> {
  let keys: Array<string> = [];
  for (let key in map) keys.push(key);
  return keys;
}
