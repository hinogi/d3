import variance from "./variance";

export default function deviation() {
  let v = variance.apply(this, arguments);
  return v ? Math.sqrt(v) : v;
}
