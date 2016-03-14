export default function keys(map) {
  let keys = [];
  for (let key in map) keys.push(key);
  return keys;
}
