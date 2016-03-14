/// <reference path="../typings/main/ambient/es6-shim/index.d.ts" />

export default function map(object, f) {
  let map = new Map();
  if (object instanceof Map) {
    object.forEach((key, value) => { map.set(key, value); });
  } else if (Array.isArray(object)) {
    let i = -1,
        n = object.length,
        o;
    if (arguments.length === 1) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f.call(object, o = object[i], i), o);
  } else {
    for (let key in object) map.set(key, object[key]);
  }
  return map;
}