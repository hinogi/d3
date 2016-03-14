export default function entries(map) {
  let entries = [];
  for (let key in map) entries.push({key: key, value: map[key]});
  return entries;
}
