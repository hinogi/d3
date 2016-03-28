import transpose from "./transpose";

export default function zip<T>(...arrays: Array<Array<T>>): Array<Array<T>> {
    return transpose(arguments);
}
