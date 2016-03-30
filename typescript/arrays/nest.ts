import {map} from "./map";
import {Nest} from "../types/nest";

// Possible use of native Map here
export function nest<T>(): Nest<T> {
  let nest: any = {},
      keys: Array<Nest<T>> = [],
      sortKeys: Array<Nest<T>> = [],
      sortValues: Array<T> = [],
      rollup: any;

  function map(mapType: typeof map, array: Array<T>, depth: number): Map<any,any> {
    if (depth >= keys.length) return rollup
        ? rollup.call(nest, array) : (sortValues
        ? array.sort(sortValues)
        : array);

    let i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        object,
        setter,
        valuesByKey = new Map(),
        values;

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
        values.push(object);
      } else {
        valuesByKey.set(keyValue, [object]);
      }
    }

    if (mapType) {
      object = mapType();
      setter = (keyValue, values) => {
        object.set(keyValue, map(mapType, values, depth));
      };
    } else {
      object = {};
      setter = (keyValue, values) => {
        object[keyValue] = map(mapType, values, depth);
      };
    }

    valuesByKey.forEach(setter);
    return object;
  }

  function entries(map: Array<T>, depth: number) {
    if (depth >= keys.length) return map;

    let array: Array<any> = [],
        sortKey = sortKeys[depth++];

    map.forEach(function(key: string, keyMap: T) {
      array.push({key: key, values: entries(keyMap, depth)});
    });

    return sortKey
        ? array.sort(function(a, b) { return sortKey(a.key, b.key); })
        : array;
  }

  nest.map = function(array, mapType) {
    return map(mapType, array, 0);
  };

  nest.entries = function(array: T[]): Array<{key: string; values: any}> {
    return entries(map(map, array, 0), 0);
  };

  nest.key = function(d: (datum: T) => string): Nest<T> {
    keys.push(d);
    return nest;
  };

  // Specifies the order for the most-recently specified key.
  // Note: only applies to entries. Map keys are unordered!
  nest.sortKeys = function(order: (a: T, b: T) => number): Nest<T> {
    sortKeys[keys.length - 1] = order;
    return nest;
  };

  // Specifies the order for leaf values.
  // Applies to both maps and entries array.
  nest.sortValues = function(order) {
    sortValues = order;
    return nest;
  };

  nest.rollup = function(f) {
    rollup = f;
    return nest;
  };

  return nest;
}
